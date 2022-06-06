import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DriverListComponent } from './driver/driver-list/driver-list.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddDialogComponent } from './driver/add-dialog/add-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AddCarDialogComponent } from './car/add-car-dialog/add-car-dialog.component';
import { CarListComponent } from './car/car-list/car-list.component';
import { MatSelectModule } from '@angular/material/select';
import { DeleteDriverDialogComponent } from './driver/delete-driver-dialog/delete-driver-dialog.component';
import { DeleteCarDialogComponent } from './car/delete-car-dialog/delete-car-dialog.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { AddTripDialogComponent } from './trip/add-trip-dialog/add-trip-dialog.component';
import { DeleteTripDialogComponent } from './trip/delete-trip-dialog/delete-trip-dialog.component';
import { ErrorMsgDialogComponent } from './error-msg-dialog/error-msg-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverListComponent,
    AddDialogComponent,
    CarListComponent,
    AddCarDialogComponent,
    DeleteDriverDialogComponent,
    DeleteCarDialogComponent,
    TripListComponent,
    AddTripDialogComponent,
    DeleteTripDialogComponent,
    ErrorMsgDialogComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'hu-HU'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
