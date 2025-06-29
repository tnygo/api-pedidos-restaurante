import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  IsIn
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ example: 'João da Silva', description: 'Nome completo do usuário' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'joao@email.com', description: 'Email válido e único' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 25, required: false, description: 'Idade do usuário (opcional)' })
  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @ApiProperty({ example: '12345678', description: 'Senha com no mínimo 6 caracteres' })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'user', required: false, description: 'Papel do usuário: user ou admin' })
  @IsOptional()
  @IsString()
  @IsIn(['user', 'admin'], { message: 'Role deve ser "user" ou "admin".' })
  role?: string;
}

