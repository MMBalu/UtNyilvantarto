import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./Car";
import { Driver } from "./Driver";

@Entity()
export class Trip{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(Type => Car, car => car.trips)
    car: Car;

    @ManyToOne(Type => Driver, driver => driver.trips)
    driver: Driver;

    @Column({ type: 'text', nullable: false })
    date: Date;
    
    @Column({ type: 'text', nullable: false })
    departureAddress: string;

    @Column({ type: 'text', nullable: false })
    arrivalAddress: string;

    @Column({ nullable: false })
    distance: number;

    @Column({ nullable: false })
    newKmAge: number;
}

