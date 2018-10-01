import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo:Repository<User>) {}
    
        async findAllUsers():Promise<User[]> {
            return await this.userRepo.find();
        }
}