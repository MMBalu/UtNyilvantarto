import { AppDataSource } from "../data-source";
import { Controller } from "./base-controller";
import {Car} from '../entity/Car'

export class CarContoller extends Controller{
    repository = AppDataSource.getRepository(Car);
}