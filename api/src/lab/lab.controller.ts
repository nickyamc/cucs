import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LabService } from './lab.service';
import { CreateLabDto } from './dto/create-lab.dto';
import { RelationsLabDto } from './dto/relations-lab.dto';
import { UpdateLabDto } from './dto/update-lb.dto';

@ApiTags('Lab')
@Controller('lab')
export class LabController {
	constructor(private labService: LabService) {}

	@Post()
	async create(@Body() lab: CreateLabDto) {
		return await this.labService.create(lab);
	}

	@ApiQuery({
		name: 'users',
		required: false,
		type: Boolean,
		description: 'Incluir usuarios.',
	})
	@ApiQuery({
		name: 'events',
		required: false,
		type: Boolean,
		description: 'Incluir eventos.',
	})
	@ApiQuery({
		name: 'attendances',
		required: false,
		type: Boolean,
		description: 'Incluir asistencias.',
	})
	@Get()
	async findAll(@Query('relations') relations: RelationsLabDto) {
		return await this.labService.findAll(relations);
	}

	@ApiParam({
		name: 'id',
		type: Number,
		required: true,
		description: 'Id del laboratorio.',
	})
	@ApiQuery({
		name: 'users',
		required: false,
		type: Boolean,
		description: 'Incluir usuarios.',
	})
	@ApiQuery({
		name: 'events',
		required: false,
		type: Boolean,
		description: 'Incluir eventos.',
	})
	@ApiQuery({
		name: 'attendances',
		required: false,
		type: Boolean,
		description: 'Incluir asistencias.',
	})
	@Get(':id')
	async findOneById(
		@Param('id', ParseIntPipe) id: number,
		@Query('relations') relations: RelationsLabDto,
	) {
		return await this.labService.findOneById(id, relations);
	}

	@ApiParam({
		name: 'id',
		type: Number,
		required: true,
		description: 'Id del laboratorio.',
	})
	@ApiBody({
		type: UpdateLabDto,
		required: true,
		description: 'Datos para actualizar un laboratorio.',
	})
	@Patch(':id')
	async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() lab: UpdateLabDto,
	) {
		return await this.labService.update(id, lab);
	}

	@ApiParam({
		name: 'id',
		type: Number,
		required: true,
		description: 'Id del laboratorio.',
	})
	@Delete(':id')
	async delete(@Param('id', ParseIntPipe) id: number) {
		return await this.labService.delete(id);
	}
}
