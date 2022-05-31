import { AppDataSource } from "../data-source";
import { Driver } from "../entity/Driver";
import { Controller } from "./base-controller";

export class DriverContoller extends Controller{
    repository = AppDataSource.getRepository(Driver);
}