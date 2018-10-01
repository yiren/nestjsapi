import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    
    //指定為Key並使用預設autoincrement
    @PrimaryGeneratedColumn()
    userId:number;

    @Column() //Column代表資料庫欄位
    password:string=undefined; // 提供預設值

    @Column()
    username:string;
    
    @Column()
    isActive:boolean;
    
    @CreateDateColumn()
    registeredDate:Date;

}
