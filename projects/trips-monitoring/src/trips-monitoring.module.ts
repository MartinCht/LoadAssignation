import { NgModule } from '@angular/core';
import { TableComponent } from '@CommonUI';
import { HomeComponent } from './lib/components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    TableComponent
  ],
  exports: [
  ]
})
export class TripsMonitoringModule { }
