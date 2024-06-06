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
        url: 'mongodb://admin:demo123@3.110.87.133:27017/?authSource=admin&authMechanism=SCRAM-SHA-1',
        database: 'test',
        entities: [UserDb,DocumentDb],
      }
    ),
    TypeOrmModule.forFeature([UserDb,DocumentDb])],

  controllers: [ UserController,DocumentController],
  providers: [ UserService,DocumentService],
})
export class AppModule {}
