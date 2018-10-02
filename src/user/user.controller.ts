import { Body, Controller, Delete, Get, Logger, Param, Post, Put } from '@nestjs/common';

import { UserDTO } from '../dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post()
    async createUser(@Body() userDTO: UserDTO){
        Logger.log(userDTO);
        return await this.userService.createUser(userDTO);
    }

    @Get()
    async getUserList(){
        return await this.userService.findAll();
    }
    
    @Put(':id')
    async updateUser(@Param() userId, @Body() userDTO: UserDTO){
        return await this.userService.updateUser(userId, userDTO);
    }

    @Delete(':id')
    async deleteUser(@Param() userId){
        return await this.userService.deleteUser(userId);
    }
}
