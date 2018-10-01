import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
