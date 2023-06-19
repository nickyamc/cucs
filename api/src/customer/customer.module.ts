import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Evento } from 'src/event/event.entity';
import { Attendance } from 'src/attendance/attendance.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Customer, Evento, Attendance])],
	providers: [CustomerService],
	controllers: [CustomerController],
})
export class CustomerModule {}
