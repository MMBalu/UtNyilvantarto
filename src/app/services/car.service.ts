import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  async getAll(){
    let res : Car[] = [];
    /*
    try{
      res = await lastValueFrom(this.http.get<Car[]>('api/cars'));
    } catch(err){
      res = [];
    }*/
    res = await lastValueFrom(this.http.get<Car[]>('/api/cars'));
    return res;
  }

  async post(car: Car){
    return await lastValueFrom(this.http.post<Car>('/api/cars', car));
  }

  async put(car: Car){
    return await lastValueFrom(this.http.put<Car>('/api/cars', car));
  }
}
