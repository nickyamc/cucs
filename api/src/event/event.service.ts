import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './event.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { RelationsEventDto } from './dto/relations-event.dto';

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(Evento) private eventRepository: Repository<Evento>,
	) {}

	findAll(query: RelationsEventDto): Promise<Evento[]> {
		return this.eventRepository.find({
			relations: {
				...query,
			},
		});
	}

	findOneById(id: number, query: RelationsEventDto): Promise<Evento | null> {
		return this.eventRepository.findOne({
			where: { id },
			relations: {
				...query,
			},
		});
	}

	async create(event: CreateEventDto): Promise<Evento> {
		const createdEvent = this.eventRepository.create(event);
		return this.eventRepository.save(createdEvent);
	}

	async update(id: number, event: UpdateEventDto): Promise<any> {
		return this.eventRepository.update({ id }, event);
	}

	async delete(id: number): Promise<any> {
		const result = await this.eventRepository.softDelete({ id });
		return result.affected === 0
			? new HttpException('El Evento no existe.', HttpStatus.NOT_FOUND)
			: result;
	}
}
