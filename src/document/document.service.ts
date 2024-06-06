
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import {CreateDocument,DocumentDb,UpdateDocument} from 'src/dto/document.dto'

@Injectable()
export class DocumentService {
    constructor(
        @InjectRepository(DocumentDb)
        private readonly DocumentDb: Repository<DocumentDb>,
      ) {}
    
      create(createDocument: CreateDocument): Promise<DocumentDb> {
        let document = this.DocumentDb.create(createDocument);
        return this.DocumentDb.save(document);
      }
    
      findAll(): Promise<DocumentDb[]> {
        return this.DocumentDb.find();
      }
    
      findOne(Id: string): Promise<DocumentDb> {
        return this.DocumentDb.findOneBy({ documentId: Id });
      }
    
      update(Id: string, updateDocument: UpdateDocument): Promise<DocumentDb> {
        const existingContent = this.DocumentDb.findOneBy({ documentId: Id });
        let updatedata = this.DocumentDb.create({
          ...existingContent,
          ...updateDocument,
          updatedAt: new Date(),
        });
    
        return this.DocumentDb.save(updatedata);
      }
    
      async remove(userId: string): Promise<string> {
        const user = await this.DocumentDb.findOneBy({  });
        if (!user) {
          throw new NotFoundException('User not found');
        }
        await this.DocumentDb.delete(user._id);
        return 'User ID deleted';
      }
}
