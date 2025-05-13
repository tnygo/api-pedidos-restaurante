import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    response.status(status).json({ 
      statusCode: status,
      message: exception.message || 'Internal Server Error',
      timestamp: new Date().toISOString(),});
  }
}
