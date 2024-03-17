import { Admin } from "../dominio/administrador";
import { AdminRepo } from "../dominio/adminRepo";
import { Encrypt } from "../infraestructura/helpers/encrypt";

export class UseCaseAdmin{
    constructor(readonly adminRepo:AdminRepo, readonly encrypt:Encrypt){}
    async run(id_admin:number, vendedor:string, total:number, password:string):Promise<Admin|null>{
        try {const passEncrypt=await this.encrypt.encodePass(password)
            const adminAdded=await this.adminRepo.addAdmin(id_admin,vendedor, total, passEncrypt);
            return adminAdded
        
    } catch (error) {
        console.log("Hubo un error en AddAdminUseCase",error);
        return null; 
    }}
}