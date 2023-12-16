import { Controller,Post,Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Post()
    create(@Body() dto :CreateUserDto){
        return this.userService.create(dto)
    }
}
