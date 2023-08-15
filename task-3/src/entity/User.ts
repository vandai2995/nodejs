import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { ModelEntity } from "./Model"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    age: number

}
