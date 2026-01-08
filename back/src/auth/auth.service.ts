import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersRepository: UsersRepository,
        private jwtService: JwtService,
    ){}

    async singIn(email: string, password: string){
        const userFound = await this.usersRepository.findByEmail(email)
        if (!userFound || !userFound.password) {
        return 'Credenciales incorrectas';
    }
        const isPasswordMatch = await bcrypt.compare(password, userFound.password);

        if (!userFound || !isPasswordMatch) {
            return 'Credenciales incorrectas';
        }

        const userPayload = {
            id: userFound.id,
            email: userFound.email, 
            isAdmin: userFound.isAdmin,
        }

        const token = this.jwtService.sign(userPayload);

        return {
            message: 'Login exitoso',
            token,
            user: {
                name: userFound.name,
                role: userFound.isAdmin ? 'admin' : 'user'
            }
        };
    
}

    async signUp(user: CreateUserDto) {
        const userFound = await this.usersRepository.findByEmail(user.email);
        if (userFound) {
            return 'El usuario ya existe';
        }

        if(user.password !== user.confirmPassword) {
            return 'Las contraseñas no coinciden';
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);

        if(!hashedPassword) {
            return 'Error al hashear la contraseña';
        }

        await this.usersRepository.addOne({
            ...user,
            password: hashedPassword,
        })

        const { password, confirmPassword, ...userWithoutPassword } = user; 
        
        return userWithoutPassword; 
    }
}
