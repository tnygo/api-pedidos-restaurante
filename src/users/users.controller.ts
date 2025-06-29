import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Patch,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guards';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo usuário' })
  @ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @Get('admin')
  @ApiOperation({ summary: 'Acesso exclusivo para administradores' })
  @ApiResponse({ status: 200, description: 'Acesso autorizado' })
  @ApiResponse({ status: 403, description: 'Acesso negado (não é admin)' })
  getAdmin() {
    return { message: 'Acesso autorizado para administradores.' };
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('protected')
  @ApiOperation({ summary: 'Acesso protegido com JWT' })
  @ApiResponse({ status: 200, description: 'Acesso permitido com token' })
  @ApiResponse({ status: 401, description: 'Token ausente ou inválido' })
  getProtected() {
    return { message: 'Acesso permitido com token!' };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  @ApiResponse({ status: 200, description: 'Usuário encontrado' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar todos os dados do usuário' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar parcialmente os dados do usuário' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso' })
  updatePartial(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateUserDto) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover usuário pelo ID' })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }
}
