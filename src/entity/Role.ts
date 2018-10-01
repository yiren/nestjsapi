import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    roleId:number
    
}
