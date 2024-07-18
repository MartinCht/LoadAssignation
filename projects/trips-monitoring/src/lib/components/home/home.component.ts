
import { TableColumn } from '@CommonUI';
import { Component } from '@angular/core';
import { Trip } from '../../models/trips.model';

@Component({
  selector: 'own-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  columns: TableColumn<Trip>[] = [
    { columnDef: 'truckNumber', header: 'Equipo', type: 'value', value: (element) => element.truckNumber },
    { columnDef: 'roadmapNumber', header: 'Hoja de Ruta', type: 'value', value: (element) => `${element.roadmapNumber}` },
    { columnDef: 'origin', header: 'Origen-Localidad', type: 'value', value: (element) => `${element.origin} - ${element.originLocation}` },
    { columnDef: 'destination', header: 'Destino-Localidad', type: 'value', value: (element) => `${element.destination} - ${element.destinationLocation}` },
    { columnDef: 'startDate', header: 'Fecha Partida', type: 'value', value: (element) => `${element.startDate}` },
    { columnDef: 'totalKm', header: 'Total de KMs', type: 'value', value: (element) => `${element.totalKm}` },
    { columnDef: 'unitsAmount', header: 'Recuento de Unidades', type: 'value', value: (element) => `${element.unitsAmount}` },
    { columnDef: 'action', header: 'Acciones', type: 'action', value: () => '', action: (element) => this.handleAction(element) },
    { columnDef: 'tag', header: 'Tag', type: 'tag', tagType: () => 'info', value: (element: any) => element.tagText }
  ];

  dataSource = [
    { truckNumber: 'Equipo 1', origin: 'Ciudad A', originLocation: 'originLoc', destination: 'Ciudad B', destinationLocation: 'destinationLoc', startDate: new Date('2023-07-15').toLocaleDateString(), totalKm: 120, unitsAmount: 5, tagText: 'Test' },
  ];

  handleAction(element: any) {
    console.log('Action clicked for element', element);
  }

}
