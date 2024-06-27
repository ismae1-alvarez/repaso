import express, { Router } from "express"

interface Options{
    port : number;
    routes : Router;
};

export class Server {
    public readonly app = express();
    private readonly port :  number;
    private readonly routes :  Router;

    constructor(option : Options){
        this.port =  option.port;
        this.routes =  option.routes;
    };

    async start(){

        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : true}));

        this.app.use(this.routes);

        this.app.listen(this.port, ()=>{
            console.log(`Server is running on port : ${this.port}`);
        });
    };
    
};


