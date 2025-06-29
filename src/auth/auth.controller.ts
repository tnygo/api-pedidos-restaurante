// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode, HttpStatus, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(
      createUserDto.email,
      createUserDto.password,
      createUserDto.name,
    );
  }

  @Post('login')
  @HttpCode(HttpStatus.OK) // define 200 como resposta do login
  async login(@Body() loginDto: LoginDto) {
    // Optionally validate user here if needed, but login expects email and password
    return this.authService.login(
      loginDto.email,
      loginDto.password,
    );
  }
  @UseGuards(JwtAuthGuard)
  @Get('perfil')
  getProfile(@Request() req) {
    return { user: req.user };
  }
}

