import { AppDataSource } from "./data-source";
import { getRouter } from "./routes";
import * as express from 'express';
import * as fs from "fs";

AppDataSource.initialize().then(async () => {

    const app = express();
    

    app.use(express.json());


    app.use('/api', getRouter());
    app.listen(3000, () => {
        console.log("Listening...");
    })


}).catch(error => console.log(error))
function expressJwt(arg0: { secret: any; }) {
    throw new Error("Function not implemented.");
}

