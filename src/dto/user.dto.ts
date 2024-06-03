export class CreatUser{
    userId:string
    name:string
    email:string
    rollno:string
}

export class UpdateUser{
    name?:string
    email?:string
    rollno?:string
}





import {Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, UpdateDateColumn} from 'typeorm'

@Entity({name:"data"})
export class UserDb{
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    userId:string

    @Column()
    name:string

    @Column()
    email:string

    @Column()
    rollno:string

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}


