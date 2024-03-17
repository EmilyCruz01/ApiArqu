import express from "express"; 
import {conexion} from "./database/database"; 

const app= express();

app.use(express.json());

async function serverIn() {
    try {
        await conexion();
        app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}

serverIn();


