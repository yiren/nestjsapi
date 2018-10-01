import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Group {
    @PrimaryGeneratedColumn()
    groupId:number
}
