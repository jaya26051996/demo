import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { DocumentService } from './document.service';
  import {CreateDocument,DocumentDb,UpdateDocument} from 'src/dto/document.dto'

  

@Controller('document')
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}

  @Post()
  createuser(@Body() createDocument: CreateDocument) {
    return this.documentService.create(createDocument);
  }

  @Get()
   findAll(){
    return this.documentService.findAll();
  }

  @Get(':Id')
   findOne(@Param('userId') userId: string) {
    return this.documentService.findOne(userId);
  }

  @Put(':Id')
   update(
    @Param('Id') Id: string,
    @Body() updateDocument: UpdateDocument,
  ){
    return this.documentService.update(Id, updateDocument);
  }

  @Delete(':userId')
   remove(@Param('userId') userId: string) {
    return this.documentService.remove(userId);
  }
}
