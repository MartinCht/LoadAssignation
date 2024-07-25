import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectModule } from '@angular/material/select';
import { TagComponent } from "../tag/tag.component";
import { TableColumn } from '../models/table-column.model';

@Component({
  selector: 'own-table',
  standalone: true,
  imports: [CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    TagComponent
  ],
  providers: [
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    MAT_SELECT_SCROLL_STRATEGY_PROVIDER,

  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: TableColumn<any>[] = [];
  @Input() dataSource: any[] = [];
  @Input() getRowClass: (row: any) => string = () => '';
  @Input() itemsNumber: number = this.dataSource.length;
  @Input() pageIndex: number;
  @Input() pageSize: number;
  @Output() pageChange = new EventEmitter<{ pageIndex: number, pageSize: number }>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private paginatorIntl: MatPaginatorIntl) {
    this.paginatorIntl.itemsPerPageLabel = "Registros por página";
    this.paginatorIntl.getRangeLabel = (page, pageSize, length) => `${page * pageSize + 1} – ${Math.min((page + 1) * pageSize, length)} de ${length}`;
  }

  tableDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];

  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.columnDef);

    this.tableDataSource.data = this.dataSource;
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  onActionClick(row: any, action?: (element: any) => void) {
    if (action) {
      action(row);
    }
  }

  onPageChange(event: PageEvent): void {
    this.pageChange.emit({ pageIndex: event.pageIndex, pageSize: event.pageSize });
  }

  goToFirstPage() {
    this.paginator.firstPage();
  }
}
