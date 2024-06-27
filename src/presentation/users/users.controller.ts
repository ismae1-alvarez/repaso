import { Request, Response } from "express"

export class UserController {
    constructor(){};

    createUser = (req:Request, res:Response)=>{
        console.log(req.body);
    };


    getUser = (_:Request, res:Response)=> {
        console.log("get")
    };

    getUserById = (req:Request, res:Response)=> {
        const {id} =  req.params;
        console.log(id);
    };

    updateUserById = (req:Request, res:Response)=> {
        const {id} =  req.params;
        console.log(id);
    };

    deleteUserBiyId = (req:Request, res:Response)=>{
        const {id} =  req.params;
        console.log(id);
    }
};

