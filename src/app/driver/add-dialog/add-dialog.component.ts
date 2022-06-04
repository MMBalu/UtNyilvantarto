import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  driver!: Driver/* =
  
  {
    id:0,
    name:'',
    birthdate: new Date(''),
    address:'',
    licenseNumber: '',
    licenseExpireDate: new Date('')
  };
*/

  driverControl = new FormGroup({
    name: new FormControl('sanyi',[
      Validators.required
    ]),
    birthdate:  new FormControl('',[
      Validators.required
    ]),
    address:  new FormControl('',[
      Validators.required
    ]),
    licenseNumber:  new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    licenseExpireDate:  new FormControl('',[
      Validators.required
    ])
  })

  ngOnInit(): void {
  }

  teszt(){
    console.log(this.driverControl.get('licenseExpireDate')?.errors);
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
    this.dialogRef.close();
  }

  async confirmAdd(): Promise<void> {
    await this.driverService.post(this.driver);
    this.dialogRef.close(1);
  }
}
