// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guards';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registrar novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário registrado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
    );
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiBody({type: LoginDto})
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login do usuário' })
  @ApiResponse({ status: 200, description: 'Login bem-sucedido, retorna token' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas' })
    async login(@Body() loginDto: LoginDto) {
      return this.authService.login(
        loginDto.email,
        loginDto.password,
      );
    }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('perfil')
  @ApiOperation({ summary: 'Perfil do usuário autenticado' })
  @ApiResponse({ status: 200, description: 'Retorna os dados do usuário autenticado' })
  @ApiResponse({ status: 401, description: 'Token inválido ou ausente' })
  getProfile(@Request() req) {
    return { user: req.user };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Get('admin')
  @ApiOperation({ summary: 'Rota protegida para administradores' })
  @ApiResponse({ status: 200, description: 'Acesso permitido para admin' })
  @ApiResponse({ status: 403, description: 'Acesso negado, não é admin' })
  @ApiResponse({ status: 401, description: 'Token ausente ou inválido' })
  getAdmin(@Request() req) {
    return { message: `Olá, ${req.user.email}. Você é admin!` };
  }
}
