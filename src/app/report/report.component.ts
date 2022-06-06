import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Car } from '../models/Car';
import { Trip } from '../models/Trip';
import { CarService } from '../services/car.service';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  cars: Car[] = [];
  trips: Trip[] = [];
  date: FormControl = new FormControl('', Validators.required);
  car: FormControl = new FormControl('', Validators.required);

  displayedColumns = ['car', 'driver', 'date', /*'tripType',*/'departureAddress',
    'arrivalAddress','distance','newKmAge'];
  dataSourcePrivate = new MatTableDataSource<Trip>();
  dataSourceCorporate = new MatTableDataSource<Trip>();

  constructor(
    private tripService: TripService,
    private carService: CarService,
  ) { }

  async ngOnInit(): Promise<void> {
    //this.loadTrips();
    this.loadCars();
  }

  async loadCars() {
    this.cars = await this.carService.getAll();
    //this.tripControl.get('car')?.value.id
    /*
    for(let i = 0; i < this.cars.length; i++){
      if(this.tripControl.get('car')?.value.id === this.cars[i].id) this.selectedCar = this.cars[i];
    }
    */
  }
  
  async loadTrips(date: Date, car: Car) {
    this.trips = await this.tripService.getAll(); //TODO: adatok elosztása szűrése
    let myFilter: Trip[] = this.trips;

    let year = date.getFullYear();
    let month = date.getMonth();

    let monthStart = new Date(year, month+0, 1);
    let monthEnd = new Date( new Date(year, month+1, 1).getTime()-1);
    

    let privData : Trip[] = [];
    let corpData : Trip[] = [];
    for(let i = 0; i < this.trips.length; i++){

      let testDate = new  Date(this.trips[i].date);
      //dátum szűrés
      if(testDate.getTime() < monthStart.getTime()) {
        console.log("1dben:"+i);
        continue;
      }

      if(testDate.getTime() > monthEnd.getTime()){
        console.log("2dben:"+i);
        continue;
      } 
      //kocsi szűrés
      if(this.trips[i].car.id != car.id){
        continue;
      } 

      if(this.trips[i].tripType === "céges"){
        corpData.push(this.trips[i]);
      } 
      else{
        privData.push(this.trips[i]);
      } 

    }
    console.log(privData);
    console.log(corpData);

    this.dataSourcePrivate.data = privData;
    this.dataSourceCorporate.data = corpData;
  }

  @ViewChild(MatPaginator) paginatorPrivate!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSourcePrivate.paginator = this.paginatorPrivate;
  }
  
  setMonthAndYear(date: Date, dp: MatDatepicker<Date>){
    console.log(date);
    dp._applyPendingSelection;
    this.date.setValue(date);
    dp.close();
    
  }
}
