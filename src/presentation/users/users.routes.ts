import { Router } from "express";
import { UserController } from "./users.controller";

export class UsersRoutes {
    
    static get routes():Router{
        const router  = Router();


        const controller  =  new UserController

        router.get("/", controller.getUser);
        router.get("/:id", controller.getUserById);
        router.post("/", controller.createUser);
        router.patch("/:id", controller.updateUserById);
        router.delete("/:id", controller.deleteUserBiyId);

        return router;

    };
};