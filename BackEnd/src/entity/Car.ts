import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip";

@Entity()
export class Car{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    type: string;

    @Column({ type: 'text', nullable: false })
    licenseNumber: string;

    @Column({ type: 'text', nullable: false })
    fuelType: string;

    @Column({ nullable: false })
    consumption: number;

    @Column({ nullable: false })
    kmAge: number;

    @OneToMany(type => Trip, trip => trip.car)
    trips: Trip[];
}