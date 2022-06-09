import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false, unique: true })
    email: string;

    @Column({ type: 'text', nullable: false })
    password: string;
}