export class CreatUser{
    userId:string
    name:string
    email:string
    rollno:string
    certificate:string[]
}

export class UpdateUser{
    name?:string
    email?:string
    rollno?:string
    certificate:string[]
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

    @Column()
    certificate:string[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}


