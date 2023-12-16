import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/users/users.module'
import {JwtModule} from '@nestjs/jwt'
import {ConfigModule} from '@nestjs/config'

@Module({
  imports:[ConfigModule.forRoot(),
    JwtModule.register({
    secret:'zxcbomj',
    signOptions:{
      expiresIn:'24h'
    }
  }),UsersModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
