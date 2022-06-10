import { AppDataSource } from "../data-source";
import { Controller } from "./base-controller";
import {User} from '../entity/User'

import {Request, Response} from "express";
import * as express from 'express';
//const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";
import { Repository } from "typeorm";

const path = require("path");

const RSA_PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname,'../keys/private.key'),'utf8');

export class UserContoller extends Controller{
    repository = AppDataSource.getRepository(User);

    loginRoute = async (req, res) => {
        const email =  req.body.email;
        const password =  req.body.password;
      
        const expireIn = 60*60;

        let user: User = await this.validateEmailAndPassword(email, password);
        if (user) {
            const userId: string = user.id.toFixed(0);
     
            const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                     algorithm: 'RS256',
                     expiresIn: expireIn,
                     subject: userId
            })
            /*
            // send the JWT back to the user
            res.cookie("SESSIONID", jwtBearerToken, {httpOnly:true, secure:true});
            console.log('cookie have created successfully');
            */
            res.status(200).json({
                idToken: jwtBearerToken,
                expiresIn: expireIn
            });                   
        }
        else {
            // send status 401 Unauthorized
            res.sendStatus(401); 
        }
    }

    validateEmailAndPassword = async (emailIn: string, passwordIn: string) =>{
         let user: User = {
             id: null,
             email: "",
             password: ""
         }
         try{
             //let userPromise = await this.repository.findOneBy({email: emailIn});
             //user = userPromise[0];
             user = await this.repository.findOneBy({email: emailIn});
             console.log(user);
         } catch(error) {
             return null;
             
            console.log("catchben jártam.")
         }
        if(!user){return null;}
        if(user.password == passwordIn){
            return user;
            console.log("pass egyezikben jártam.")
        }
        console.log("sehol nem jártam.")
        return null;
     }


     public async validateEmailAndPassword2(emailIn: string, passwordIn: string) : Promise<User> {
         let user: User;
         try{
             let userPromise = await this.repository.findOneBy({email: emailIn});
             user = userPromise[0];
         } catch(error) {
             user = null;
         }
        if(user.password === passwordIn){
            return user;
        }
        return null;
     }

}