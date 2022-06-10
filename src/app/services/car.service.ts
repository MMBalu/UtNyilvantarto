import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { OpenErrorDialog } from '../error-msg-dialog/error-msg-dialog.component';

import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private openErrorDialog: OpenErrorDialog
  ) {}

  async getAll(){
    let res : Car[] = [];
    try{
      res = await lastValueFrom(this.http.get<Car[]>('api/cars'));
    } catch(err){
      res = [];
      this.openErrorDialog.catchHttpError(err)
    }
    
    /*res = await lastValueFrom(this.http.get<Car[]>('/api/cars'));*/
    return res;
  }

  async post(car: Car){
    try{
       return await lastValueFrom(this.http.post<Car>('/api/cars', car));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    }
  }

  async put(car: Car){
    try{
      return await lastValueFrom(this.http.put<Car>('/api/cars', car));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    }
  }

  async delete(car: Car){
    let i : number = car.id
    try{
      return await lastValueFrom(this.http.delete<Car>('/api/cars/' + i));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      //this.errorDialog.catchHttpError(e)
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