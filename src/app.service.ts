import { Inject, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './auth/User';

@Injectable()
export class AppService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepo:Repository<User>){}

  root(): string {
    return 'Hello World! There';
  }
  
  async findAll():Promise<User[]>{
    return await this.userRepo.find();
  }

  async createUser(data:User){
    return await this.userRepo.save(data);
  }
  
}
