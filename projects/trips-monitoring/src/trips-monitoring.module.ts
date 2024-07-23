import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent, TableComponent, DragAndDropComponent } from '@CommonUI';
import { HomeComponent } from './lib/components/home/home.component';
import { InvalidTripsDetailComponent, TripsMonitoringService } from './public-api';

@NgModule({
  declarations: [
    HomeComponent,
    InvalidTripsDetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableComponent,
    ButtonComponent,
    DragAndDropComponent,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    TripsMonitoringService
  ]
})
export class TripsMonitoringModule { }
