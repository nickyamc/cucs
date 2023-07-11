import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Evento } from './event.entity';
import { In, Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { RelationsEventDto } from './dto/relations-event.dto';
import e from 'express';

@Injectable()
export class EventService {
	constructor(
		@InjectRepository(Evento) private eventRepository: Repository<Evento>,
	) {}

	async findAll(relations: RelationsEventDto): Promise<Evento[]> {
		const events = await this.eventRepository.find({
			relations,
		});
		return events;
	}

	async findOneById(id: number, relations: RelationsEventDto): Promise<Evento> {
		const event = await this.eventRepository.findOne({
			where: { id },
			relations,
		});
		return event;
	}

	async findAllOrFail(ids: number[]) {
		const events = await this.eventRepository.findBy({ id: In(ids) });
		if (events.length === 0) throw new Error();
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
