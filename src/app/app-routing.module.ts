import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car/car-list/car-list.component';
import { DriverListComponent } from './driver/driver-list/driver-list.component';
import { ReportComponent } from './report/report.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import {AuthGuardService} from './services/auth/auth-guard.service'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'report', component: ReportComponent, canActivate: [AuthGuardService]},
  {path: 'driverlist', component: DriverListComponent, canActivate: [AuthGuardService] },
  {path: 'carlist', component: CarListComponent, canActivate: [AuthGuardService]},
  {path: '', component: TripListComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
