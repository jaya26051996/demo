import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreatUser, UpdateUser, UserDb } from 'src/dto/user.dto';


@Controller('user')
export class 
UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createuser(@Body() createuser: CreatUser) {
    return this.userService.create(createuser);
  }

  @Get()
  async findAll(): Promise<UserDb[]> {
    return this.userService.findAll();
  }

  @Get(':Id')
  async findOne(@Param('userId') userId: string): Promise<UserDb> {
    return this.userService.findOne(userId);
  }

  @Put(':Id')
  async update(
    @Param('Id') Id: string,
    @Body() updateUser: UpdateUser,
  ): Promise<UserDb> {
    return this.userService.update(Id, updateUser);
  }

  @Delete(':userId')
  async remove(@Param('userId') userId: string): Promise<string> {
    return this.userService.remove(userId);
  }
}
