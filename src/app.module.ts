import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDb} from 'src/dto/user.dto'
import {DocumentDb} from 'src/dto/document.dto'

import { DocumentService } from './document/document.service';
import { DocumentController } from './document/document.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mongodb',
        url: 'mongodb://localhost:27017',
        database: 'test',
        entities: [UserDb,DocumentDb],
      }
    ),
    TypeOrmModule.forFeature([UserDb,DocumentDb])],

  controllers: [ UserController,DocumentController],
  providers: [ UserService,DocumentService],
})
export class AppModule {}
