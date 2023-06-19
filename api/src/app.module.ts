import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabModule } from './lab/lab.module';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [LabModule, EventModule, UserModule, CustomerModule, AuthModule, AttendanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
