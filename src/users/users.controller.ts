import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  ParseIntPipe,
  UseInterceptors,
  UseFilters
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryFilterDto } from './dto/query-filter.dto';
import { ResponseInterceptor } from '../response/response.interceptor';
import { CustomExceptionFilter } from 'src/custom-exception/custom-exception.filter';
import { HttpException } from '@nestjs/common/exceptions/http.exception';

@Controller('users')
@UseFilters(CustomExceptionFilter)
@UseInterceptors(ResponseInterceptor) 

export class UserController {
  constructor(private readonly userService: UsersService) {}

  // 1. Criação de usuário com validação (via @Body)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // 2. Buscar usuário por ID (via @Param e ParseIntPipe)
  @Get(':id')
  findOne(@Param('id') id: string) {
    if (id !== '1') {
      throw new HttpException('Usuário não encontrado', 404);
    }
    return { id, name: 'John Doe' };
  }

  // 3. Listar usuários com filtros e paginação (via @Query)
  @Get()
  findAll() {
    return [{ id: 1, name: 'John Doe' }];
  }
}
