import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Trip } from "./Trip";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;   

    @Column({ type: 'text', nullable: false })
    name: string;

    @Column({ type: 'text', nullable: false })
    birthdate: Date;

    @Column({ type: 'text', nullable: false })
    address: string;    

    @Column({ type: 'text', nullable: false })
    licenseNumber: string;

    @Column({ type: 'text', nullable: false })
    licenseExpireDate: Date;

    @OneToMany(type => Trip, trip => trip.driver)
    trips: Trip[];
}