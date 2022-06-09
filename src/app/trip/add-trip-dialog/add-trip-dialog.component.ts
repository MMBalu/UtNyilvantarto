import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { DriverListComponent } from 'src/app/driver/driver-list/driver-list.component';
import { Car } from 'src/app/models/Car';
import { Driver } from 'src/app/models/Driver';
import { Trip } from 'src/app/models/Trip';
import { CarService } from 'src/app/services/car.service';
import { DriverService } from 'src/app/services/driver.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-add-trip-dialog',
  templateUrl: './add-trip-dialog.component.html',
  styleUrls: ['./add-trip-dialog.component.scss']
})
export class AddTripDialogComponent implements OnInit {

  selectedCar: Car|undefined;
  selectedDriver: Driver|undefined;
  cars: Car[]| undefined = [];
  drivers: Driver[] = [];

  isExpired(date: Date): boolean{
    return DriverListComponent.isLicenseExpired(date);
  }

  constructor(
    private dialogRef: MatDialogRef<AddTripDialogComponent>,
    private tripService: TripService,
    @Inject(MAT_DIALOG_DATA) public data: { trip: Trip | undefined | null, edit: boolean, return: boolean},
    private carService: CarService,
    private driverService: DriverService,
  )
  {
    //console.log(this.data.trip);

    if(this.data.edit === true){
      this.tripControl.get('id')!.setValue(this.data.trip?.id);
      this.tripControl.get('car')!.setValue(this.data.trip?.car);
      this.tripControl.get('driver')!.setValue(this.data.trip?.driver);
      this.tripControl.get('date')!.setValue(this.data.trip?.date);
      this.tripControl.get('tripType')!.setValue(this.data.trip?.tripType);
      this.tripControl.get('departureAddress')!.setValue(this.data.trip?.departureAddress);
      this.tripControl.get('arrivalAddress')!.setValue(this.data.trip?.arrivalAddress);
      this.tripControl.get('distance')!.setValue(this.data.trip?.distance);
      this.tripControl.get('newKmAge')!.setValue(this.data.trip?.newKmAge);
    }
    else if(this.data.return === true){
      this.tripControl.get('car')!.setValue(this.data.trip?.car);
      this.tripControl.get('driver')!.setValue(this.data.trip?.driver);
      this.tripControl.get('tripType')!.setValue(this.data.trip?.tripType);
      this.tripControl.get('departureAddress')!.setValue(this.data.trip?.arrivalAddress);
      this.tripControl.get('arrivalAddress')!.setValue(this.data.trip?.departureAddress);
      this.tripControl.get('distance')!.setValue(this.data.trip?.distance);
      let x=0, y=0;
      if(this.data.trip?.newKmAge) x = this.data.trip?.newKmAge;
      if(this.data.trip?.distance) y = this.data.trip?.distance;
      this.tripControl.get('newKmAge')!.setValue(x+y);
    }
  }

  ngOnInit(): void {
    this.loadCars();
    this.loadDrivers();
  }
/*
  id:number;
  car: Car;
  driver: Driver;
  date: Date;
  tripType: string;
  departureAddress: string;
  arrivalAddress: string;
  distance: number;
  newKmAge: number;
*/
  tripControl = new FormGroup({
    id: new FormControl(''),
    car: new FormControl('',[
      Validators.required
    ]),
    driver: new FormControl('',[
      Validators.required
    ]),
    date: new FormControl('',[
      Validators.required
    ]),
    tripType: new FormControl('',[
      Validators.required
    ]),
    departureAddress: new FormControl('',[
      Validators.required
    ]),
    arrivalAddress: new FormControl('',[
      Validators.required
    ]),
    distance: new FormControl('',[
      Validators.required
    ])
    ,
    newKmAge: new FormControl('',[
      Validators.required
    ])
  })
  
  

  teszt(){
    console.log(this.tripControl);
  }

  async loadCars() {
    this.cars = await this.carService.getAll();
    //this.tripControl.get('car')?.value.id
    if(!this.cars) {
      return;
    }
    for(let i = 0; i < this.cars.length; i++){
      if(this.tripControl.get('car')?.value.id === this.cars[i].id) this.selectedCar = this.cars[i];
    }
    
  }

  async loadDrivers() {
    this.drivers = await this.driverService.getAll();
    /*for(let i = 0; i < this.drivers.length; i++) {
      if(DriverListComponent.isLicenseExpired(this.drivers[i].licenseExpireDate)){
        this.drivers.splice(i, 1);
      }
    }*/
    for(let i = 0; i < this.drivers.length; i++){
      if(this.tripControl.get('driver')?.value.id === this.drivers[i].id) this.selectedDriver = this.drivers[i];
    }
  }

  getErrorMessage(child: string) {
    let controller = this.tripControl.get(child);
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
    //this.tripControl.get('name')
  }

  cancel(): void {
    this.dialogRef.close(-1);
  }

  async confirmAdd(): Promise<void> {
    //console.log(this.tripControl.value)
    if(this.data.edit === false) await this.tripService.post(this.tripControl.value);
    if(this.data.edit === true) await this.tripService.put(this.tripControl.value);
    this.dialogRef.close(1);
  }
}
