import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;   

    @Column()
    name: string;

    @Column()
    birthdate: Date;

    @Column()
    address: string;    

    @Column()
    licenseNumber: string;

    @Column()
    licenseExpireDate: Date;

    @OneToMany(type => Trip, trip => trip.driver)
    trips: Trip[];
}