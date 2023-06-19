import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './event.entity';
import { Lab } from 'src/lab/lab.entity';
import { Customer } from 'src/customer/customer.entity';
import { Attendance } from 'src/attendance/attendance.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Evento, Lab, Customer, Attendance])],
	providers: [EventService],
	controllers: [EventController],
})
export class EventModule {}
