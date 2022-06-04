import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { DriverService } from './driver.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueValidationService implements AsyncValidator  {

  constructor(
    private driverService: DriverService
  ) { }

  validate
  (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    throw new Error('Method not implemented.');
  
  }

  
}
