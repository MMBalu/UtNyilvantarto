import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { Driver } from 'src/app/models/Driver';
import { DriverService } from 'src/app/services/driver.service';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

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

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
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


}
