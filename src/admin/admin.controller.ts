import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guards';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('admin')
export class AdminController {
  @Get()
  @Roles('admin')
  @ApiOperation({ summary: 'Acesso exclusivo para administradores' })
  @ApiResponse({ status: 200, description: 'Acesso autorizado' })
  @ApiResponse({ status: 403, description: 'Acesso negado, não é admin' })
  @ApiResponse({ status: 401, description: 'Token ausente ou inválido' })
  getAdminData() {
    return { message: 'Bem-vindo, administrador!' };
  }
}
