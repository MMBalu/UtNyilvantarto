import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

import { Car } from '../models/Car';
import { ErrorDialog } from './errorDialog';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private errorDialog: ErrorDialog = new ErrorDialog(this.dialog);

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  async getAll(){
    let res : Car[] = [];
    
    try{
      res = await lastValueFrom(this.http.get<Car[]>('api/cars'));
    } catch(err){
      res = [];
    }
    /*res = await lastValueFrom(this.http.get<Car[]>('/api/cars'));*/
    return res;
  }

  async post(car: Car){
    return await lastValueFrom(this.http.post<Car>('/api/cars', car));
  }

  async put(car: Car){
    return await lastValueFrom(this.http.put<Car>('/api/cars', car));
  }

  async delete(car: Car){
    let i : number = car.id
    try{
      return await lastValueFrom(this.http.delete<Car>('/api/cars/' + i));
    } catch (e: any) {
      this.errorDialog.catchHttpError(e)
      return ;
    }
  }
}
/*
 private errorDialog: ErrorDialog = new ErrorDialog(this.dialog);

  constructor(
    private dialog: MatDialog
  ) {}

  try{
    return await lastValueFrom(this.http.delete<Car>('/api/cars/' + i));
  } catch (e: any) {
    this.errorDialog.catchHttpError(e)
    return ;
  } 
*/