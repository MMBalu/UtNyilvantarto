import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/driver.service';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { DeleteDriverDialogComponent } from '../delete-driver-dialog/delete-driver-dialog.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit, AfterViewInit {
  
  driver!: Driver;
  drivers: Driver[] = [];
  displayedColumns = ['name', 'licenseNumber', 'licenseExpireDate', 'birthdate', 'address', 'buttons'];
  dataSource = new MatTableDataSource<Driver>(this.drivers);
  
  constructor(
    private driverService: DriverService,
    private dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public isLicenseExpired = DriverListComponent.isLicenseExpired;
  static isLicenseExpired(date: Date): boolean{
    const expireDate = new Date(date);
    expireDate.setMilliseconds(0);
    expireDate.setSeconds(0);
    expireDate.setMinutes(0);
    expireDate.setHours(0);

    const today = new Date();
    today.setMilliseconds(0);
    today.setSeconds(0);
    today.setMinutes(0);
    today.setHours(0);
    
      if(expireDate.getTime() < today.getTime()) return true;
      else return false;
  }

  async ngOnInit(): Promise<void> {
     this.loadDrivers();
  }
  
  async loadDrivers() {
      this.drivers = await this.driverService.getAll();
      this.dataSource.data = this.drivers;
  }

  addNew() {
    const dialogRef = this.dialog.open(
      AddDialogComponent,
      {
        data: {edit: false}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadDrivers();
      }
    });
  }

  startEdit(id: number) {
    let driver: any = {};

    for(let d of this.drivers){
      if(d.id === id) driver = d;
    }

    const dialogRef = this.dialog.open(
      AddDialogComponent,
      {
        data: {driver: driver, edit: true}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadDrivers();
      }
    });
  }

  deleteItem(id: number){
    let driver: any = {};

    for(let d of this.drivers){
      if(d.id === id) driver = d;
    }
    const dialogRef = this.dialog.open(
      DeleteDriverDialogComponent,
      {
        data: {driver: driver}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadDrivers();
      }
    });
  }
}
