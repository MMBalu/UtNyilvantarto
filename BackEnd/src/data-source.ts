import "reflect-metadata";
import { DataSource } from "typeorm";
import { Car } from "./entity/Car";
import { Driver } from "./entity/Driver";
import { Trip } from "./entity/Trip";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "mydb.sql",
    synchronize: true,
    logging: true,
    entities: [Driver, Car, Trip, User],
    migrations: [],
    subscribers: [],
});