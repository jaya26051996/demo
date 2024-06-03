import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDb } from './dto/user.dto';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mongodb',
        url: 'mongodb://localhost:27017',
        database: 'test',
        entities: [UserDb],
      }
    ),
    TypeOrmModule.forFeature([UserDb])],

  controllers: [ UserController],
  providers: [ UserService],
})
export class AppModule {}
