import { CustomException } from './custom.exception';
import {
  Controller,
  Get,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
  ForbiddenException,
  InternalServerErrorException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { get } from 'http';

@Controller('errors')
export class ErrorsController {
  @Get('not-found')
  notFound() {
    throw new NotFoundException('Recurso não encontrado');
  }

  @Get('bad-request')
  badRequest() {
    throw new BadRequestException('Requisição inválida');
  }

  @Get('unauthorized')
  unauthorized() {
    throw new UnauthorizedException('Usuário não autorizado');
  }

  @Get('forbidden')
  forbidden() {
    throw new ForbiddenException('Acesso proibido');
  }

  @Get('internal-error')
  internalError() {
    throw new InternalServerErrorException('Erro interno do servidor');
  }
  @Get('http-exception')
  customError() {
    throw new HttpException('Erro personalizado', HttpStatus.FORBIDDEN);
  }
  @Get('custom')
  CustomException() {
    throw new CustomException();
  }
}
