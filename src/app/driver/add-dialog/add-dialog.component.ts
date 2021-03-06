import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
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

  selectedBirthDate!: Date | undefined;
  selectedLicenseDate!: Date | undefined;

  constructor(
    private dialogRef: MatDialogRef<AddDialogComponent>,
    private driverService: DriverService,
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
      this.driverControl.get('birthdate')!.setValue( new Date(this.data.driver!.birthdate).toISOString());
      this.driverControl.get('address')!.setValue(this.data.driver?.address);
      this.driverControl.get('licenseNumber')!.setValue(this.data.driver?.licenseNumber);
      this.driverControl.get('licenseExpireDate')!.setValue( new Date(this.data.driver!.licenseExpireDate).toISOString());

      this.selectedBirthDate = this.data.driver?.birthdate;
      this.selectedLicenseDate = this.data.driver?.licenseExpireDate;
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

  getErrorMessage(child: string) {
    let controller = this.driverControl.get(child);
    if (!controller) return null;
    return controller.hasError('matDatepickerParse') ? 'Nem megfelel?? form??tum!' : //matDatepickerParse
      controller.hasError('required') ? 'K??telez?? mez??' :
      controller.hasError('email') ? 'Helytelen e-mail c??m' :
      controller.hasError('matDatepickerMax') && child === 'birthdate' ? 'T??l fiatal!' :
      controller.hasError('matDatepickerMin') && child === 'birthdate' ? 'T??l id??s!' :
      controller.hasError('matDatepickerMax') && child === 'licenseExpireDate' ? 'Magyarorsz??gon maximum 10 ??vre adnak jogos??tv??nyt!' :
      controller.hasError('matDatepickerMin') && child === 'licenseExpireDate' ? 'Lej??rt jogos??tv??ny nem lehet felvinni!' :
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
