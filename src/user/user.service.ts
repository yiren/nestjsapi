import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/User';
import { UserDTO } from '../dto/user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>){}
    async findAll(): Promise<User[]>{
        return await this.userRepo.find();
    }

    async createUser(data: UserDTO){
        const newUser = new User();
        newUser.username = data.username;
        newUser.title = data.title;
        // Default is true
        // newUser.isActive = true;
        return await this.userRepo.save(newUser);
    }

    async deleteUser(userId){
        const userToDelete = await this.userRepo.findOne(userId);
        await this.userRepo.delete(userId);
        return `The User ${userToDelete.username} is deleted`;
    }

    async updateUser(userId, data: UserDTO){
        await this.userRepo.update(userId, data);
    }
}
