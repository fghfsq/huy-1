import { Injectable } from '@nestjs/common'
import {Repository} from 'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import { UserEntity } from './entity/user.entity'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private repository:Repository<UserEntity>){}

    async create(dto:CreateUserDto){
        return this.repository.save(dto)
    }

    async getUserByEmail(email:string){
        return this.repository.findOneBy({email})
    }
}
