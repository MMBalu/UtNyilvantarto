import * as express from 'express';
import { CarContoller } from './controller/car-controller';
import { DriverContoller } from './controller/driver-controller';
import { TripContoller } from './controller/trip-controller';

export function getRouter(){
    const router = express.Router();

    const driverController = new DriverContoller();
    const carController = new CarContoller();
    const tripController = new TripContoller();

    router.get('/drivers', driverController.getAll);
    router.get('/drivers/:id', driverController.getOne);
    router.post('/drivers', driverController.create);
    router.put('/drivers', driverController.update);
    router.delete('/drivers/:id', driverController.delete);

    router.get('/cars', carController.getAll);
    router.get('/cars/:id', carController.getOne);
    router.post('/cars', carController.create);
    router.put('/cars', carController.update);
    router.delete('/cars/:id', carController.delete);

    router.get('/trips', tripController.getAll);
    router.get('/trips/:id', tripController.getOne);
    router.post('/trips', tripController.create);
    router.put('/trips', tripController.update);
    router.delete('/trips/:id', tripController.delete);

    return router;
}