import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    TripsMonitoringService
  ]
})
export class TripsMonitoringModule { }
