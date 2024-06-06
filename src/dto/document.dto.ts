export class CreateDocument
{
    documentId:string
    documentname:string
    collectedBy:string[]
    
}

export class UpdateDocument{
    documentId:string
    documentname:string
    collectedBy:string[]
}





import {Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, UpdateDateColumn} from 'typeorm'

@Entity({name:"document"})
export class DocumentDb{
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    documentId:string

    @Column()
    documentname:string

    @Column()
    collectedBy:string[]

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

}


