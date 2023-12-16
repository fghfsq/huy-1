import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersModule } from './users/users.module'
import { UserEntity } from "./users/entity/user.entity"
import { AuthModule } from './auth/auth.module'

@Module({
    imports:[ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.PORTDB),
            username: process.env.USER,
            password:  process.env.PASSWORD,
            database:  process.env.DB,
            entities: [UserEntity],
            synchronize: true,
          }),
        UsersModule,
        AuthModule,]
})

export class AppModule{}