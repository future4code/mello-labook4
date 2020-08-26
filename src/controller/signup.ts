import { Request, Response } from "express";
import BaseDB from "../database/BaseDatabase";
import UserDB from "../database/UserDatabase";
import { signupInputDTO } from "../models/User";
import { UserBusines } from "../business/UserBusiness";
import Authenticator from "../services/Authenticator";

export default async function signup (req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body;

        const input: signupInputDTO = {
            name: name,
            email: email,
            password: password
        };

        const token = await UserBusines.signup(input)

        res.status(200).send({
           message: "user created sucessfully" ,
           token 
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
            sqlMessage: error.sqlMessage
        });
    } finally {
        await BaseDB.destroyConnection();
    }
};




















