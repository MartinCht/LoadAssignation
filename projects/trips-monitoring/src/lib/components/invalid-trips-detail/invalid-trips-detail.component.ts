import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TripAssignationExcelResponse } from '../../models/trip-assignation-excel-response.model copy';

@Component({
  selector: 'own-invalid-trips-detail',
  templateUrl: './invalid-trips-detail.component.html',
  styleUrls: ['./invalid-trips-detail.component.scss']
})
export class InvalidTripsDetailComponent {
  constructor(private dialogRef: MatDialogRef<InvalidTripsDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: TripAssignationExcelResponse[]) { }

  onClose() {
    this.dialogRef.close();
  }
}
