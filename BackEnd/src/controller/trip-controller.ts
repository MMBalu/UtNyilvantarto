import { AppDataSource } from "../data-source";
import { Trip } from "../entity/Trip";
import { Controller } from "./base-controller";

export class TripContoller extends Controller{
    repository = AppDataSource.getRepository(Trip);
}