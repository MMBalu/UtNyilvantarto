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

  hasLoaded: boolean = false;
  cars: Car[] = [];
  trips: Trip[] = [];

  minDate: Date = new Date(2022, 0, 1);

  date: FormControl = new FormControl('', Validators.required);
  car: FormControl = new FormControl('', Validators.required);

  loadedCar!: Car;
  loadedDate!: Date;

  displayedColumns = [/*'car',*/ 'driver', 'date', /*'tripType',*/'departureAddress',
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

  firstTrip: Trip | null = null;
  lastTrip: Trip | null = null;

  privKmSum: number = 0;
  corpKmSum: number = 0;
  async loadTrips(date: Date, car: Car) {
    this.trips = await this.tripService.getAll(); //TODO: adatok elosztása szűrése
    let myFilter: Trip[] = this.trips;

    let year = date.getFullYear();
    let month = date.getMonth();

    let monthStart = new Date(year, month+0, 1);
    let monthEnd = new Date( new Date(year, month+1, 1).getTime()-1);
    
    this.firstTrip = null;
    this.lastTrip = null;

    let privData : Trip[] = [];
    let corpData : Trip[] = [];

    this.privKmSum = 0;
    this.corpKmSum = 0;
    
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
      //első és utolsó Trip mentése
      if(this.firstTrip==null ){
        this.firstTrip = this.trips[i];
      }
      if(this.lastTrip==null ){
        this.lastTrip = this.trips[i];
      }

      //Első trip keresése
      if( new Date(this.firstTrip.date).getTime() > testDate.getTime()){
        this.firstTrip = this.trips[i];
      }
      //Utolsó trip keresése
      if( new Date(this.lastTrip.date).getTime() < testDate.getTime()){
        this.lastTrip = this.trips[i];
      }


      if(this.trips[i].tripType === "céges"){
        corpData.push(this.trips[i]);
        this.corpKmSum += this.trips[i].distance;
      } 
      else{
        privData.push(this.trips[i]);
        this.privKmSum += this.trips[i].distance;
      } 

    }
    //console.log(privData);
    //console.log(corpData);

    //Adatok betöltése a MatTable-be
    this.dataSourcePrivate.data = privData;
    this.dataSourceCorporate.data = corpData;

    this.hasLoaded = true;
    this.loadedCar = car;
    this.loadedDate = monthStart;
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