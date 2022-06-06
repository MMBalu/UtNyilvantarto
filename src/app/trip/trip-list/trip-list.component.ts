import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Trip } from 'src/app/models/Trip';
import { TripService } from 'src/app/services/trip.service';
import { AddTripDialogComponent } from '../add-trip-dialog/add-trip-dialog.component';
import { DeleteTripDialogComponent } from '../delete-trip-dialog/delete-trip-dialog.component';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  trips: Trip[] = [];
  displayedColumns = ['car', 'driver', 'date', 'tripType','departureAddress',
    'arrivalAddress','distance','newKmAge', 'buttons'];
  dataSource = new MatTableDataSource<Trip>(this.trips);

  constructor(
    private tripService: TripService,
    private dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadTrips();
  }
  
  async loadTrips() {
    this.trips = await this.tripService.getAll();
    this.dataSource.data = this.trips;
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  addNew() {
    const dialogRef = this.dialog.open(
      AddTripDialogComponent,
      {
        data: {edit: false}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadTrips();
      }
    });
  }

  startEdit(id: number) {
    let trip: any = {};

    for(let t of this.trips){
      if(t.id === id) trip = t;
    }

    const dialogRef = this.dialog.open(
      AddTripDialogComponent,
      {
        data: {trip: trip, edit: true}
      }
      );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadTrips();
      }
    });
  }

  deleteItem(id: number){
    let trip: any = {};

    for(let t of this.trips){
      if(t.id === id) trip = t;
    }
    const dialogRef = this.dialog.open(
      DeleteTripDialogComponent,
      {
        data: {trip: trip}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadTrips();
      }
    });
  }

  addReturn(id: number){
    let trip: any = {};

    for(let t of this.trips){
      if(t.id === id) trip = t;
    }
    const dialogRef = this.dialog.open(
      AddTripDialogComponent,
      {
        data: {trip: trip, return: true, edit: false}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadTrips();
      }
    });
  }
   /* */
}
