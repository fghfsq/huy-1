import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { UsersModule } from './users/users.module';

@Module({
    imports:[ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.HOST,
            port: Number(process.env.PORTDB),
            username: process.env.USER,
            password:  process.env.PASSWORD,
            database:  process.env.DB,
            entities: [],
            synchronize: true,
          }),
        UsersModule,]
})

export class AppModule{}