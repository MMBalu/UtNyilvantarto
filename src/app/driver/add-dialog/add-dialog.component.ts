import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  minBirthDate: Date;
  maxBirthDate: Date;
  minLicenseExpireDate: Date;
  maxLicenseExpireDate: Date;

  constructor(
    private dialogRef: MatDialogRef<AddDialogComponent>,
    private driverService: DriverService
  ) { 
    const currentDate: Date = new Date();
    this.minBirthDate = new Date(currentDate.getTime() - 100*365*24*60*60*1000);
    this.maxBirthDate = new Date(currentDate.getTime() - 17*365*24*60*60*1000);
    this.minLicenseExpireDate = currentDate;
    this.maxLicenseExpireDate = new Date(currentDate.getTime() + 10*365*24*60*60*1000);
  }

  driver: Driver =
  {
    id:0,
    name:'',
    birthdate: new Date(''),
    address:'',
    licenseNumber: '',
    licenseExpireDate: new Date('')
  };

  ngOnInit(): void {
  }

  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Kötelező mező' :
      this.formControl.hasError('email') ? 'Helytelen e-mail cím' :
        '';
  }

  submit() {
  // empty
  }

  cancel(): void {
    this.dialogRef.close();
  }

  async confirmAdd(): Promise<void> {
    await this.driverService.post(this.driver);
    this.dialogRef.close(1);
  }
}
