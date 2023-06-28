import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lab } from './lab.entity';
import { Repository } from 'typeorm';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lb.dto';
import { EventService } from 'src/event/event.service';
import { RelationsLabDto } from './dto/relations-lab.dto';

@Injectable()
export class LabService {
	constructor(
		@InjectRepository(Lab) private labRepository: Repository<Lab>,
		private eventService: EventService,
	) {}

	findAll(relations: RelationsLabDto): Promise<Lab[]> {
		return this.labRepository.find({
			relations: {
				...relations,
			},
		});
	}

	findOne(id: number, relations: RelationsLabDto): Promise<Lab> {
		return this.labRepository.findOne({
			where: { id },
			relations: { ...relations },
		});
	}

	async findOneOrFail(id: number) {
		const lab = await this.findOne(id, {}); //this.labRepository.findOneBy({ id });
		if (!lab) throw new Error();
	}

	async create(lab: CreateLabDto): Promise<Lab> {
		const createdLab = this.labRepository.create(lab);
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
