import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent, TableComponent, DragAndDropComponent, TitleComponent } from '@CommonUI';
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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TableComponent,
    TitleComponent,
    ButtonComponent,
    DragAndDropComponent,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
  ],
  exports: [
    TripsMonitoringService
  ]
})
export class TripsMonitoringModule { }
