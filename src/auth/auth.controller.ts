import { Controller,Post,Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateUserDto } from 'src/users/dto/create-user.dto'

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/register')
    async create(@Body() dto:CreateUserDto){    
        return this.authService.register(dto)
    }

    @Post('/login')
    async login(@Body() dto:CreateUserDto){
        return this.authService.login(dto)
    }
}
