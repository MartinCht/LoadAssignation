
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableColumn, DragAndDropComponent } from '@CommonUI';

import { debounceTime, filter, Subject } from 'rxjs';

import { InvalidTripsDetailComponent } from '../invalid-trips-detail/invalid-trips-detail.component';
import { TripsResponse } from '../../models/search-trips-response.model';
import { Trip } from '../../models/trips.model';
import { TripsMonitoringService } from '../../services/trips-monitoring.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'own-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  columns: TableColumn<TripsResponse>[] = [
    { columnDef: 'truckNumber', header: 'Equipo', type: 'value', value: (element) => element.truckNumber },
    { columnDef: 'roadmapNumber', header: 'Hoja de Ruta', type: 'value', value: (element) => `${element.number}` },
    { columnDef: 'origin', header: 'Origen-Localidad', type: 'multiValue', multiValue: (element) => element.routes.map(r => r.origin) },
    { columnDef: 'destination', header: 'Destino-Localidad', type: 'multiValue', multiValue: (element) => element.routes.map(r => r.destination) },
    { columnDef: 'startDate', header: 'Fecha Partida', type: 'value', value: (element) => `${element.startDate}` },
    { columnDef: 'totalKm', header: 'Total de KMs', type: 'value', value: (element) => `${element.totalKm}` },
    { columnDef: 'unitsAmount', header: 'Recuento de Unidades', type: 'value', value: (element) => `${element.unitsAmount}` },
  ];

  dataSource: TripsResponse[];
  selectedFile: File | null = null;
  loading: boolean;
  itemsNumber: number;
  pageSize: number = 10;
  pageIndex: number = 0;
  searchForm: FormGroup<{ searchText: FormControl<string | null> }>;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private tripsMonitoringService: TripsMonitoringService
  ) {
    this.searchForm = this.fb.group({
      searchText: ''
    });
  }
  ngOnInit(): void {
    this.searchForm.controls.searchText.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(() => {
      this.doSearch();
    });

    this.doSearch();
  }

  handleAction(element: any) {
    console.log('Action clicked for element', element);
  }

  getRowClass(row: Trip): string {
    if (row)
      return ''

    return ''
  }

  doSearch() {
    this.loading = true;

    this.tripsMonitoringService.search(this.searchForm.value.searchText ?? '', this.pageIndex, this.pageSize)
      .subscribe(response => {
        this.itemsNumber = response.total;
        this.dataSource = response.results
      }).add(() => this.loading = false);
  }

  handleImportClick() {
    const dialogRef = this.dialog.open(DragAndDropComponent);

    dialogRef.afterClosed()
      .pipe(filter(result => result))
      .subscribe((result: File) => {
        this.loading = true;
        this.tripsMonitoringService.uploadTripsAssignationExcel(result)
          .subscribe(result => {
            if (result.length !== 0)
              this.dialog.open(InvalidTripsDetailComponent, { data: result });
            this.doSearch();
          });
      });
  }

  onPageChange(event: { pageIndex: number, pageSize: number }): void {
    const { pageIndex, pageSize } = event;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
    this.doSearch();
  }
}
