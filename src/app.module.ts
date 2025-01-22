import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { EmpApiModule } from './emp-api/emp-api.module';
// import { EmpApiModule } from './emp-api/emp-api.module';

@Module({
  imports: [NinjasModule, UsersModule, EmpApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
