import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

// 可以指定產生的Table Name，或是傳入EntityOptions物件
@Entity("Users")
export class User {
    // 指定userId為為Primary Key且為AutoIncrement
    @PrimaryGeneratedColumn()
    userId: number;

    // @Column為對應的資料庫欄位，或是傳入Column Options物件
    @Column()
    username: string;

    // 傳入Column Options物件設定mapping的欄位屬性
    @Column({
        type: 'varchar',
        length: 50,
    })
    title: string;

    @Column({
        default: true,
    })
    isActive: boolean;

}
