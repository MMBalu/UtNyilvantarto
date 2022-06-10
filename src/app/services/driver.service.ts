import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { OpenErrorDialog } from '../error-msg-dialog/error-msg-dialog.component';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(
    private http: HttpClient,
    private openErrorDialog: OpenErrorDialog
  ) {}

  async getAll(){
    let res : Driver[] = [];
    try{
      res = await lastValueFrom(this.http.get<Driver[]>('/api/drivers'));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return res;
    } 
    return res;
  }

  async post(driver: Driver){
    try{
      return await lastValueFrom(this.http.post<Driver>('/api/drivers', driver));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    } 
  }

  async put(driver: Driver){
    try{
      return await lastValueFrom(this.http.put<Driver>('/api/drivers', driver));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    } 
  }

  async delete(driver: Driver){
    let i : number = driver.id
     
    try{
      return await lastValueFrom(this.http.delete<Driver>('/api/drivers/' + i)); 
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    } 
  }
}
