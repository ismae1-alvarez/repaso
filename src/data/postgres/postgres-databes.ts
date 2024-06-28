import { DataSource } from "typeorm";

interface Option{
    host :  string;
    port : number;
    username :  string;
    password :  string;
    database : string;
};


export class PostgresDatabase {

    private datasource : DataSource;

    constructor(option : Option){
        this.datasource =  new DataSource({
            type : "postgres",
            host : option.host,
            port : option.port,
            username : option.username,
            password : option.password,
            database : option.database,

            // entities : []
            synchronize :  true, 
            ssl : {
                rejectUnauthorized : false,
            }

            
        });
    };


    async connect(){
        try {
            await this.datasource.initialize();
        } catch (error) {
            console.log(error);
        }
    };

};