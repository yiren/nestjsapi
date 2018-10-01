import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "useradmin",
      synchronize: true,
      logging: false,
      entities: [
        "src/entity/**/*.ts"
      ],
      migrations: [
        "src/migration/**/*.ts"
      ],
      migrationsRun:true,
      subscribers: [
        "src/subscriber/**/*.ts"
     ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
