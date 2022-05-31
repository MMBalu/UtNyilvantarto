import { AppDataSource } from "./data-source";
import { getRouter } from "./routes";
import * as express from 'express';

AppDataSource.initialize().then(async () => {

    const app = express();
    app.use(express.json());

    app.use('/api', getRouter());
    app.listen(3000, () => {
        console.log("Listening...");
    })


}).catch(error => console.log(error))
