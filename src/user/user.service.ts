import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { promises } from 'dns';
import { CreatUser, UpdateUser, UserDb } from 'src/dto/user.dto';

import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDb)
    private readonly userDb: Repository<UserDb>,
  ) {}

  create(createUserDto: CreatUser): Promise<UserDb> {
    let user = this.userDb.create(createUserDto);
    
    return this.userDb.save(user);
  }

  findAll(): Promise<UserDb[]> {
    return this.userDb.find();
  }

  findOne(Id: string): Promise<UserDb> {
    return this.userDb.findOneBy({ userId: Id });
  }

  update(Id: string, updateUserDto: UpdateUser): Promise<UserDb> {
    const existingContent = this.userDb.findOneBy({ userId: Id });
    let updatedata = this.userDb.create({
      ...existingContent,
      ...updateUserDto,
      updatedAt: new Date(),
    });

    return this.userDb.save(updatedata);
  }

  async remove(userId: string): Promise<string> {
    const user = await this.userDb.findOneBy({ userId });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.userDb.delete(user._id);
    return 'User ID deleted';
  }
}
