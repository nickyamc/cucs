import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './attendance.entity';
import { Customer } from 'src/customer/customer.entity';
import { Lab } from 'src/lab/lab.entity';
import { Evento } from 'src/event/event.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Attendance, Customer, Lab, Evento])],
	providers: [AttendanceService],
	controllers: [AttendanceController],
})
export class AttendanceModule {}
