import { Router } from "express";

export class RepairsRoutes {
    
    static get routes():Router{
        const router  = Router();

        router.get("/", ()=>console.log("get"));
        router.get("/:id", ()=> console.log("id"));
        router.post("/", ()=> console.log("post"));
        router.patch("/:id", ()=> console.log("patch"));
        router.delete("/:id", ()=> console.log("delete"));

        return router;

    };
};