import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { OpenErrorDialog } from '../error-msg-dialog/error-msg-dialog.component';
import { Trip } from '../models/Trip';

@Injectable({
  providedIn: 'root'
})

export class TripService {

  constructor(private http: HttpClient,
    private openErrorDialog: OpenErrorDialog
  ) {}

  async getAll(){
    let res : Trip[] = [];
    try{
      res = await lastValueFrom(this.http.get<Trip[]>('/api/trips'));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e);
    } 
    return res;
  }
  async post(trip: Trip){
    try{
      return await lastValueFrom(this.http.post<Trip>('/api/trips', trip));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    } 
  }

  async put(trip: Trip){
    try{
      return await lastValueFrom(this.http.put<Trip>('/api/trips', trip));
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    } 
  }

  async delete(trip: Trip){
    let i : number = trip.id
    try{
      return await lastValueFrom(this.http.delete<Trip>('/api/trips/' + i));//dummy
    } catch (e: any) {
      this.openErrorDialog.catchHttpError(e)
      return ;
    } 
  }
}
