import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/driver.service';


@Component({
  selector: 'app-delete-driver-dialog',
  templateUrl: './delete-driver-dialog.component.html',
  styleUrls: ['./delete-driver-dialog.component.scss']
})
export class DeleteDriverDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteDriverDialogComponent>,
    private driverService: DriverService,
    @Inject(MAT_DIALOG_DATA) public data: { driver: Driver} 
    ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  async confirm(): Promise<void> {
    await this.driverService.delete(this.data.driver);
    this.dialogRef.close(1);
  }
}
