import { Request, Response } from "express";
import { UseCaseAdmin } from "../../aplicacion/addAdminUseCase";

export class AddAdminController{
    constructor(readonly useCaseAdmin:UseCaseAdmin){}

    async run(req:Request, res:Response){
        try {
            let id_admin=req.body.id_admin;
            let vendedor=req.body.vendedor;
            let total=req.body.total;
            let password=req.body.password;
            let adminCreated= await this.useCaseAdmin.run(id_admin,vendedor,total,password)

        }
        try{
            let id_pedido = req.body.id_pedido;
            let nombre = req.body.nombre;
            let direccion = req.body.direccion;
            let nip = req.body.nip;
            console.log(req.body);

            let pedidoCreado = await this.addAdminUseCase.run(id_pedido,nombre,direccion,nip);

            if(pedidoCreado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_pedido: pedidoCreado
            }else{
                nombre: pedidoCreado.nombre,
                        direccion:pedidoCreado.direccion,
                        nip:pedidoCreado.nip
                    },
                    message:"Pedido guardado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error registrar administrador en addPedido.controller"
                })
            }
        }catch(err
                return 
        } catch (error) {
            
        }
    }
}