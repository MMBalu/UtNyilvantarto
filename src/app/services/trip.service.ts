import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Trip } from '../models/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {}

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
    return await lastValueFrom(this.http.delete<Trip>('/api/trips/' + i));
  }
}
