import { Request, Response, Router } from "express";
import { VideogamesRoutes } from "./videogames/routes";
import {AuthRoutes} from "./auth/routes"

export class AppRoutes {
    static get routes():Router{

        const router =  Router();

        router.use("/api/v1/videogames",VideogamesRoutes.routes)

        router.use("/auth/v1/auth", AuthRoutes.routes)

        router.get("/purchases", (req:Request, res:Response)=>{
            res.send("purchases")
        })

        return router
    }
}
