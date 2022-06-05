import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Trip } from 'src/app/models/Trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-delete-trip-dialog',
  templateUrl: './delete-trip-dialog.component.html',
  styleUrls: ['./delete-trip-dialog.component.scss']
})
export class DeleteTripDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeleteTripDialogComponent>,
    private driverService: TripService,
    @Inject(MAT_DIALOG_DATA) public data: { trip: Trip} 
    ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  async confirm(): Promise<void> {
    await this.driverService.delete(this.data.trip);
    this.dialogRef.close(1);
  }
}
