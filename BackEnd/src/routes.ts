import * as express from 'express';
import { CarContoller } from './controller/car-controller';
import { DriverContoller } from './controller/driver-controller';
import { TripContoller } from './controller/trip-controller';
import {UserContoller} from './controller/user-controller';

let authorize = require('./middlewares/auth');
import { check, validationResult } from 'express-validator';

export function getRouter(){
    const router = express.Router();

    const driverController = new DriverContoller();
    const carController = new CarContoller();
    const tripController = new TripContoller();
    const userController = new UserContoller();

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

    router.post(
        '/user/register-user',
        [
            check('name')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
            check('email', 'Email is required').not().isEmpty().isEmail(),
            check('password', 'Password should be between 5 to 8 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 20 }),
        ],
        this.userController.signUp()
    );
    router.post('/user/signin', this.userController.signIn);

    router.get('/user', userController.getAll);
    router.get('/user/:id', userController.getOne);
    router.put('/user', userController.update);
    router.delete('/user/:id', userController.delete);

    return router;
}