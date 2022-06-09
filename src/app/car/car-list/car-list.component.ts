import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Car } from 'src/app/models/Car';
import { CarService } from 'src/app/services/car.service';
import { AddCarDialogComponent } from '../add-car-dialog/add-car-dialog.component';
import { DeleteCarDialogComponent } from '../delete-car-dialog/delete-car-dialog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit, AfterViewInit {
  
  car!: Car;
  cars: Car[] |undefined = [];
  displayedColumns = ['type', 'licenseNumber', 'fuelType', 'consumption', 'kmAge', 'buttons'];
  dataSource = new MatTableDataSource<Car>(this.cars);
  /*
    id: number;
    type: string;
    licenseNumber: string;
    fuelType: string;
    consumption: number;
    kmAge: number;
  */
  constructor(
    private carService: CarService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  

  async ngOnInit(): Promise<void> {
     this.loadCars();
  }
  
  async loadCars() {
      this.cars = await this.carService.getAll();
      if(!this.cars){
        this.cars = [];
      }
      this.dataSource.data = this.cars;
  }

  addNew() {
    const dialogRef = this.dialog.open(
      AddCarDialogComponent,
      {
        data: {edit: false}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadCars();
      }
    });
  }

  startEdit(id: number) {
    let car: any = {};

    if(!this.cars){
      return;
    }
    for(let c of this.cars){
      if(c.id === id) car = c;
    }

    const dialogRef = this.dialog.open(
      AddCarDialogComponent,
      {
        data: {car: car, edit: true}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadCars();
      }
    });
  }

  deleteItem(id: number){
    let car: any = {};
    if(!this.cars) {
      return;
    }
    for(let c of this.cars){
      if(c.id === id) car = c;
    }
    const dialogRef = this.dialog.open(
      DeleteCarDialogComponent,
      {
        data: {car: car}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadCars();
      }
    });
  }

}
