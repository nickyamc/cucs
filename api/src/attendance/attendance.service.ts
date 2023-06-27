import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './attendance.entity';
import { Repository } from 'typeorm';
import { CustomerService } from 'src/customer/customer.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { LabService } from 'src/lab/lab.service';
import { EventService } from 'src/event/event.service';

@Injectable()
export class AttendanceService {
	constructor(
		@InjectRepository(Attendance)
		private attendanceRepository: Repository<Attendance>,
	) {}

	findAll(): Promise<Attendance[]> {
		return this.attendanceRepository.find();
	}

	findOne(id: number): Promise<Attendance | null> {
		return this.attendanceRepository.findOneBy({ id });
	}

	async create(attedance: CreateAttendanceDto): Promise<any> {
		const createdAttendance = this.attendanceRepository.create();
		// const customer = await this.customerService.findOne(attedance.customerId);
		// if (customer === null)
		// 	return new HttpException('El Visitante no existe', HttpStatus.NOT_FOUND);
		// const lab = await this.labService.findOne(attedance.labId);
		// if (lab === null)
		// 	return new HttpException(
		// 		'El Laboratorio no existe',
		// 		HttpStatus.NOT_FOUND,
		// 	);
		// createdAttendance.lab = lab;
		// if (!attedance.eventId) attedance.eventId = 1;
		// const event = await this.eventService.findOne(attedance.eventId);
		// if (event === null)
		// 	return new HttpException('El Evento no existe', HttpStatus.NOT_FOUND);
		// createdAttendance.event = event;
		return this.attendanceRepository.save(createdAttendance);
	}
}
