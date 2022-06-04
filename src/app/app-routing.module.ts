import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car/car-list/car-list.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';

const routes: Routes = [
  { path: 'driverlist', component: DriverListComponent },
  { path: 'carlist', component: CarListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
