import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) {}

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
    return await lastValueFrom(this.http.delete<Driver>('/api/drivers/' + i));
  }
}
