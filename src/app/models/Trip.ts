import { Car } from "./Car";
import { Driver } from "./Driver";

export interface Trip{
    id:number;
    car: Car;
    driver: Driver;
    date: Date;
    tripType: string;
    departureAddress: string;
    arrivalAddress: string;
    distance: number;
    newKmAge: number;
}

