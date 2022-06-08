import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { Controller } from "./base-controller";
import bcrypt from 'bcrypt';
import {Jwt} from 'jsonwebtoken';
import { validationResult } from 'express-validator';


class UserContoller extends Controller{
    repository = AppDataSource.getRepository(User);
    jwt = require('jsonwebtoken');
    
    signUp = async (req, res, next) => {
        
        const errors = validationResult(req)
        console.log(req.body)
        if (!errors.isEmpty()) {
          return res.status(422).jsonp(errors.array())
        } else {
          bcrypt.hash(req.body.password, 10).then(async (hash) => {
            const user: User = {
                id: null,
                name: req.body.name,
                email: req.body.email,
                password: hash,
            }
            try{
                const userInserted = await this.repository.save(user);
                res.status(201).json({
                    message: 'User successfully created!',
                    result: userInserted,
                  })
            } catch(error) {
                res.status(500).json({
                    error: error,
                });
            }
          })
        }
    }


    signIn = async (req, res, next) => {
        let getUser: User;
        try{
            let user = this.repository.find(req.body.email);
            if (!user) {
                return res.status(401).json({
                  message: 'Authentication failed',
                })
            }
            getUser = (await user).values[0];
            bcrypt.compare(req.body.password, getUser.password)
            .then((response) => {
                if (!response) {
                    return res.status(401).json({
                      message: 'Authentication failed',
                    })
                  }
                  let jwtToken = this.jwt.sign(
                    {
                      email: getUser.email,
                      userId: getUser.id,
                    },
                    'longer-secret-is-better_jkdaFDf739Jg79HtV8G3Kki9gTc443fg7GcgdjJft85G,Zbfd',
                    {
                      expiresIn: '1h',
                    },
                  )
                  res.status(200).json({
                    token: jwtToken,
                    expiresIn: 3600,
                    id: getUser.id,
                  })
                  .catch((err) => {
                    return res.status(401).json({
                      message: 'Authentication failed',
                    })
                  })
            })
        } catch (err) {
        res.status(500).json({ message: err.message });
      } 
    }
}

export {UserContoller};
