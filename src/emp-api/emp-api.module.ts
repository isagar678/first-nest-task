import { Module } from '@nestjs/common';
import { EmpApiService } from './emp-api.service';
import { EmpApiController } from './emp-api.controller';

@Module({
  controllers: [EmpApiController],
  providers: [EmpApiService],
})
export class EmpApiModule {}
