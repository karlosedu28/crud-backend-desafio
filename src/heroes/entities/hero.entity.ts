import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Heroes"})
export class Hero {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    hability: string;
    
    @Column({nullable: false})
    origin: string
}
