import { Admin } from "./administrador";

//En esta parte van los metodos 

export interface AdminRepo{addAdmin(id_admin:number, vendedor:string, total:number, password:string):Promise<Admin | null>}