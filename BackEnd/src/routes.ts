import * as express from 'express';
import { UserContoller } from './controller/auth-controller';
import { CarContoller } from './controller/car-controller';
import { DriverContoller } from './controller/driver-controller';
import { TripContoller } from './controller/trip-controller';

import * as fs from "fs";

const jwksRsa = require('jwks-rsa');
import { expressjwt } from 'express-jwt';

const path = require("path");

const RSA_PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname,'./keys/public.key'),'utf8');

const checkIfAuthenticated = expressjwt({
    secret: RSA_PUBLIC_KEY,
    algorithms: ["RS256"]
}); 

export function getRouter(){
    const router = express.Router();

    const driverController = new DriverContoller();
    const carController = new CarContoller();
    const tripController = new TripContoller();
    const userController = new UserContoller();

    router.get('/drivers', checkIfAuthenticated, driverController.getAll);
    router.get('/drivers/:id', checkIfAuthenticated, driverController.getOne);
    router.post('/drivers', checkIfAuthenticated, driverController.create);
    router.put('/drivers', checkIfAuthenticated, driverController.update);
    router.delete('/drivers/:id', checkIfAuthenticated, driverController.delete);

    router.get('/cars', checkIfAuthenticated, carController.getAll);
    router.get('/cars/:id', checkIfAuthenticated, carController.getOne);
    router.post('/cars', checkIfAuthenticated, carController.create);
    router.put('/cars', checkIfAuthenticated, carController.update);
    router.delete('/cars/:id', checkIfAuthenticated, carController.delete);

    router.get('/trips', tripController.getAll);
    router.get('/trips/:id', tripController.getOne);
    router.post('/trips', tripController.create);
    router.put('/trips', tripController.update);
    router.delete('/trips/:id', tripController.delete);

    router.route('/login').post(userController.loginRoute);
    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    return router;
}