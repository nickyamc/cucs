import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attendance } from './attendance.entity';
import { Between, Repository } from 'typeorm';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { RelationsAttendanceDto } from './dto/relations-attendance.sto';
import { QueryAttendanceDto } from './dto/query-attendance.dto';

@Injectable()
export class AttendanceService {
	constructor(
		@InjectRepository(Attendance)
		private attendanceRepository: Repository<Attendance>,
	) {}

	async create(attedance: CreateAttendanceDto): Promise<any> {
		const createdAttendance = this.attendanceRepository.create(attedance);
		return this.attendanceRepository.save(createdAttendance);
	}

	async findAllByCustomerId(
		customerId: number,
		query: QueryAttendanceDto,
	): Promise<Attendance[]> {
		const attendaces = await this.attendanceRepository.find({
			where: {
				customerId,
				dateRecord: {
					createdAt: Between(
						query.startDate ? query.startDate : new Date('1900-01-01'),
						query.endDate ? query.endDate : new Date(),
					),
				},
			},
			relations: {
				customer: this.customBoolean(query.customer, true),
				lab: this.customBoolean(query.lab, false),
				event: this.customBoolean(query.event, false),
			},
		});
		return attendaces;
	}

	customBoolean(value: boolean | undefined, v: boolean): boolean {
		return value === undefined ? v : value;
	}

	async findAllByLabId(
		labId: number,
		query: QueryAttendanceDto,
	): Promise<Attendance[]> {
		const attendaces = await this.attendanceRepository.find({
			where: {
				labId,
				dateRecord: {
					createdAt: Between(
						query.startDate ? query.startDate : new Date('1900-01-01'),
						query.endDate ? query.endDate : new Date(),
					),
				},
			},
			relations: {
				customer: this.customBoolean(query.customer, false),
				lab: this.customBoolean(query.lab, true),
				event: this.customBoolean(query.event, false),
			},
		});
		return attendaces;
	}

	async findAllByEventId(
		eventId: number,
		query: QueryAttendanceDto,
	): Promise<Attendance[]> {
		const attendaces = await this.attendanceRepository.find({
			where: { eventId },
			relations: {
				customer: this.customBoolean(query.customer, false),
				lab: this.customBoolean(query.lab, false),
				event: this.customBoolean(query.event, true),
			},
		});
		return attendaces;
	}

	async findOneById(
		id: number,
		relations: RelationsAttendanceDto,
	): Promise<Attendance | null> {
		const attendaces = await this.attendanceRepository.findOne({
			where: { id },
			relations,
		});
		return attendaces;
	}

	async findOneByCheckCode(
		checkCode: string,
		relations: RelationsAttendanceDto,
	): Promise<Attendance | null> {
		const attendaces = await this.attendanceRepository.findOne({
			where: { checkCode },
			relations,
		});
		return attendaces;
	}
}
