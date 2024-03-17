import {Sequelize} from "sequelize-typescript";
import dotenv from "dotenv"; 

dotenv.config();

export const sequelize = new Sequelize({
    dialect:"mysql",
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    username:process.env.USER,
    host: process.env.HOST,
    port: 3306
});

export async function conexion() {
    try{
        await sequelize.authenticate();
        console.log("Conexion exitosa");
        await sequelize.sync({force:false})
    }catch(error){
        console.log("Conexion fallida", error);
    }
    
}