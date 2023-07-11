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
	ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { RelationsEventDto } from './dto/relations-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@ApiTags('Event')
@Controller('event')
export class EventController {
	constructor(private eventService: EventService) {}

	@ApiBody({
		type: CreateEventDto,
		required: true,
		description: 'Datos para crear un evento.',
	})
	@Post()
	create(@Body() event: CreateEventDto) {
		return this.eventService.create(event);
	}

	@ApiQuery({
		name: 'labs',
		required: false,
		type: 'boolean',
	})
	@ApiQuery({
		name: 'customers',
		required: false,
		type: 'boolean',
	})
	@ApiQuery({
		name: 'attendances',
		required: false,
		type: 'boolean',
	})
	@Get()
	findAll(
		@Query(new ValidationPipe({ transform: true }))
		relations: RelationsEventDto,
	) {
		return this.eventService.findAll(relations);
	}

	@ApiParam({ name: 'id', required: true, type: 'number' })
	@ApiQuery({
		name: 'labs',
		required: false,
		type: 'boolean',
	})
	@ApiQuery({
		name: 'customers',
		required: false,
		type: 'boolean',
	})
	@ApiQuery({
		name: 'attendances',
		required: false,
		type: 'boolean',
	})
	@Get(':id')
	findOneById(
		@Param('id', ParseIntPipe) id: number,
		@Query(new ValidationPipe({ transform: true }))
		relations: RelationsEventDto,
	) {
		return this.eventService.findOneById(id, relations);
	}

	@ApiParam({ name: 'id', required: true, type: 'number' })
	@ApiBody({
		type: UpdateEventDto,
		required: true,
		description: 'Datos para actualizar un evento.',
	})
	@Patch(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() event: UpdateEventDto) {
		return this.eventService.update(id, event);
	}

	@ApiParam({ name: 'id', required: true, type: 'number' })
	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.eventService.delete(id);
	}
}
