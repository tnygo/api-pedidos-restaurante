import { Module } from '@nestjs/common';
import { ErrorsController } from './errors.controller';
import { ErrorsService } from './errors.service';

@Module({
  controllers: [ErrorsController],
  providers: [ErrorsService]
})
export class ErrorsModule {}
