import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-car-dialog.component.html',
  styleUrls: ['./add-car-dialog.component.scss']
})
export class AddCarDialogComponent implements OnInit {
  fuels : string[] = [
    "benzin",
    "dízel",
    "benzin/hybrid",
    "dízel/hybrid",
    "benzin/LPG",
    "elektromos"
  ]

  constructor(
    private dialogRef: MatDialogRef<AddCarDialogComponent>,
    private carService: CarService,
    @Inject(MAT_DIALOG_DATA) public data: { car: Car| null | undefined, edit: boolean} 
  ) { 
    console.log(this.data);
    
    if(this.data.edit === true){
      this.carControl.get('id')!.setValue(this.data.car?.id);
      this.carControl.get('type')!.setValue(this.data.car?.type);
      this.carControl.get('licenseNumber')!.setValue(this.data.car?.licenseNumber);
      this.carControl.get('fuelType')!.setValue(this.data.car?.fuelType);
      this.carControl.get('consumption')!.setValue(this.data.car?.consumption);
      this.carControl.get('kmAge')!.setValue(this.data.car?.kmAge);
    }
  }

  carControl = new FormGroup({
    id: new FormControl(''),
    type: new FormControl('',[
      Validators.required
    ]),
    licenseNumber:  new FormControl('',[
      Validators.required,
      Validators.pattern("(^[A-Z]{3}-((?!000)\\d{3})$)")
    ]),
    fuelType:  new FormControl('',[
      Validators.required
    ]),
    consumption:  new FormControl('', {
      validators:  [Validators.required, Validators.min(1), Validators.max(100)]
    }),
    kmAge:  new FormControl('',[
      Validators.required,
      Validators.min(1)
    ])
  })

  ngOnInit(): void {
  }

  teszt(){
    console.log(this.carControl);
  }

  formControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  getErrorMessage(child: string) {
    let controller = this.carControl.get(child);
    if (!controller) return null;
    return controller.hasError('matDatepickerParse') ? 'Nem megfelelő formátum!' : //matDatepickerParse
      controller.hasError('required') ? 'Kötelező mező' :
      controller.hasError('pattern') && child === "licenseNumber" ? 'Nem megfelelő formátum' :
      controller.hasError('min') ? 'Túl kicsi érték' :
      controller.hasError('max') ? 'Túl nagy érték' :
        '';
  }

  submit() {
  // empty
    //this.carControl.get('name')
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  async confirmAdd(): Promise<void> {
    if(this.data.edit === false) await this.carService.post(this.carControl.value);
    if(this.data.edit === true) await this.carService.put(this.carControl.value);
    this.dialogRef.close(1);
  }
}
