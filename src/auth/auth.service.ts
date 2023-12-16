import { Injectable,HttpException,HttpStatus,UnauthorizedException } from '@nestjs/common'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcryptjs'
import {JwtService} from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UserEntity } from 'src/users/entity/user.entity'

@Injectable()
export class AuthService {
    constructor(private userService:UsersService,
        private jwt:JwtService){}

    async register(dto:CreateUserDto){
        const cantidate = await this.userService.getUserByEmail(dto.email)

        if(cantidate){
            throw new HttpException('huy',HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(dto.password,5)

        const user = await this.userService.create({...dto,password:hashPassword})

        return this.generateToken(user)
    }

    async login(dto:CreateUserDto){
        const user = await this.validateUser(dto)

        return this.generateToken(user)
    }

    async generateToken(user:UserEntity){
        const payload = {
           id:user.id,
            email:user.email
        }
        return{
            token:this.jwt.sign(payload)
        }
    }

    async validateUser(dto:CreateUserDto){
        const user = await this.userService.getUserByEmail(dto.email)
        const validPassword = await bcrypt.compare(dto.password,user.password)

        if(user && validPassword){
            return user
        }

        throw new UnauthorizedException({message:'huy'})
    }
}
