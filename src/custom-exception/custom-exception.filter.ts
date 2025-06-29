import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import path from 'path';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({ 
      statusCode: status,
      path: path.basename(ctx.getRequest().url),
      message: exception.message || 'Erro interno do servidor',
      timestamp: new Date().toISOString(),});
  }
}
