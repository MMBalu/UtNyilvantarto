import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/driver.service';
import { UniqueValidationService } from 'src/app/services/unique-validation.service';

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
    private driverService: DriverService,
    private uniqueValidator: UniqueValidationService,
    @Inject(MAT_DIALOG_DATA) public data: { driver: Driver| null | undefined, edit: boolean} 
  ) { 
    const currentDate: Date = new Date();
    this.minBirthDate = new Date(currentDate.getTime() - 100*365*24*60*60*1000);
    this.maxBirthDate = new Date(currentDate.getTime() - 17*365*24*60*60*1000);
    this.minLicenseExpireDate = currentDate;
    this.maxLicenseExpireDate = new Date(currentDate.getTime() + 10*365*24*60*60*1000);


    console.log(this.data);
    
    if(this.data.edit === true){
      this.driverControl.get('id')!.setValue(this.data.driver?.id);
      this.driverControl.get('name')!.setValue(this.data.driver?.name);
      this.driverControl.get('birthdate')!.setValue(this.data.driver?.birthdate);
      this.driverControl.get('address')!.setValue(this.data.driver?.address);
      this.driverControl.get('licenseNumber')!.setValue(this.data.driver?.licenseNumber);
      this.driverControl.get('licenseExpireDate')!.setValue(this.data.driver?.licenseExpireDate);
    }
  }

  driverControl = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('',[
      Validators.required
    ]),
    birthdate:  new FormControl('',[
      Validators.required
    ]),
    address:  new FormControl('',[
      Validators.required
    ]),
    licenseNumber:  new FormControl('', {
      validators:  [Validators.required],
      asyncValidators: [],
      //updateOn: "blur" 
    }),
    licenseExpireDate:  new FormControl('',[
      Validators.required
    ])
  })

  ngOnInit(): void {
  }

  teszt(){
    console.log(this.driverControl);
  }

  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  getErrorMessage(child: string) {
    let controller = this.driverControl.get(child);
    if (!controller) return null;
    return controller.hasError('matDatepickerParse') ? 'Nem megfelelő formátum!' : //matDatepickerParse
      controller.hasError('required') ? 'Kötelező mező' :
      controller.hasError('email') ? 'Helytelen e-mail cím' :
      controller.hasError('matDatepickerMax') && child === 'birthdate' ? 'Túl fiatal!' :
      controller.hasError('matDatepickerMin') && child === 'birthdate' ? 'Túl idős!' :
      controller.hasError('matDatepickerMax') && child === 'licenseExpireDate' ? 'Magyarországon maximum 10 évre adnak jogosítványt!' :
      controller.hasError('matDatepickerMin') && child === 'licenseExpireDate' ? 'Lejárt jogosítvány nem lehet felvinni!' :
        '';
  }

  submit() {
  // empty
    //this.driverControl.get('name')
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  async confirmAdd(): Promise<void> {
    if(this.data.edit === false) await this.driverService.post(this.driverControl.value);
    if(this.data.edit === true) await this.driverService.put(this.driverControl.value);
    this.dialogRef.close(1);
  }
}
