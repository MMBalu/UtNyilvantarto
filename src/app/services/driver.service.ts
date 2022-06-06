import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Driver } from '../models/Driver';
import { ErrorDialog } from './errorDialog';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private errorDialog: ErrorDialog = new ErrorDialog(this.dialog);

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  async getAll(){
    let res : Driver[] = [];
    /*
    try{
      res = await lastValueFrom(this.http.get<Driver[]>('api/drivers'));
    } catch(err){
      res = [];
    }*/
    res = await lastValueFrom(this.http.get<Driver[]>('/api/drivers'));
    return res;
  }

  async post(driver: Driver){
    //return await this.http.post<User>('/api/users', user).toPromise();
    return await lastValueFrom(this.http.post<Driver>('/api/drivers', driver));
  }

  async put(driver: Driver){
    return await lastValueFrom(this.http.put<Driver>('/api/drivers', driver));
  }

  async delete(driver: Driver){
    let i : number = driver.id
     
    try{
      return await lastValueFrom(this.http.delete<Driver>('/api/drivers/' + i)); 
    } catch (e: any) {
      this.errorDialog.catchHttpError(e)
      return ;
    } 
  }
}
