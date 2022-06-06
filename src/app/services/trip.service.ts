import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { lastValueFrom } from 'rxjs';
import { Trip } from '../models/Trip';
import { ErrorDialog } from './errorDialog';

@Injectable({
  providedIn: 'root'
})

export class TripService {

  private errorDialog: ErrorDialog = new ErrorDialog(this.dialog);

  constructor(private http: HttpClient,
    private dialog: MatDialog
  ) {}

  async getAll(){
    let res : Trip[] = [];
    
    res = await lastValueFrom(this.http.get<Trip[]>('/api/trips'));
    return res;
  }
  async post(trip: Trip){
    return await lastValueFrom(this.http.post<Trip>('/api/trips', trip));
  }

  async put(trip: Trip){
    return await lastValueFrom(this.http.put<Trip>('/api/trips', trip));
  }

  async delete(trip: Trip){
    let i : number = trip.id
    try{
      return await lastValueFrom(this.http.delete<Trip>('/api/trips/' + i));//dummy
    } catch (e: any) {
      this.errorDialog.catchHttpError(e)
      return ;
    } 
  }
}
