import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lab } from './lab.entity';
import { In, Repository } from 'typeorm';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lb.dto';
import { EventService } from 'src/event/event.service';
import { RelationsLabDto } from './dto/relations-lab.dto';
import { Evento } from 'src/event/event.entity';

@Injectable()
export class LabService {
	constructor(
		@InjectRepository(Lab) private labRepository: Repository<Lab>,
		@InjectRepository(Evento) private eventRepository: Repository<Evento>,
		private eventService: EventService,
	) {}

	async findAll(relations: RelationsLabDto): Promise<Lab[]> {
		const labs = await this.labRepository.find({
			relations: {
				...relations,
			},
		});
		return labs;
	}

	async findOneById(id: number, relations: RelationsLabDto): Promise<Lab> {
		const lab = await this.labRepository.findOne({
			where: { id },
			relations: { ...relations },
		});
		return lab;
	}

	async notFindByCodeOrFail(suneduCode: string) {
		const lab = await this.labRepository.findOne({
			where: { suneduCode },
		});
		if (lab) throw new Error();
	}

	async findOneOrFail(id: number): Promise<Lab> {
		const lab = await this.labRepository.findOneOrFail({ where: { id } });
		return lab;
	}

	async create(lab: CreateLabDto): Promise<Lab> {
		const createdLab = this.labRepository.create(lab);
		const events = await this.eventRepository.findBy({
			id: In(lab.eventIds),
		});
		createdLab.events = events;
		return this.labRepository.save(createdLab);
	}

	async update(id: number, lab: UpdateLabDto): Promise<any> {
		return this.labRepository.update({ id }, lab);
	}

	async delete(id: number): Promise<any> {
		const result = await this.labRepository.softDelete({ id });
		return result.affected === 0
			? new HttpException('El Laboratorio no existe.', HttpStatus.NOT_FOUND)
			: result;
	}
}
