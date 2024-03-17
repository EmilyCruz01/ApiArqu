import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
    tableName: "Admin" ,
    timestamps:false
})
class AdminModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true
    })
    public id_admin!:number;

    @Column({
        type:DataType.STRING,
    })
    public vendedor!:string;

    @Column({
        type:DataType.NUMBER,
    })
    public total!:number;

    @Column({
        type:DataType.STRING,
    })
    public password!: string;
    
}