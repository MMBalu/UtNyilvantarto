import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-delete-car-dialog',
  templateUrl: './delete-car-dialog.component.html',
  styleUrls: ['./delete-car-dialog.component.scss']
})
export class DeleteCarDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteCarDialogComponent>,
    private carService: CarService,
    @Inject(MAT_DIALOG_DATA) public data: { car: Car} 
    ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  async confirm(): Promise<void> {
    await this.carService.delete(this.data.car);
    this.dialogRef.close(1);
  }
}
