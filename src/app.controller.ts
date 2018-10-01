import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { UserDTO } from './dto/user.dto';
import { getMaxListeners } from 'cluster';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post("create")
  async create(@Body()userDTO:UserDTO){
    return await this.appService.createUser(userDTO);
  }

  @Get("list")
  async getList(){
    return await this.appService.findAll();  
  }
}
