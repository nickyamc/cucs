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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RelationsUserDto } from './dto/relations-user.dto';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@ApiBody({
		type: CreateUserDto,
		required: true,
		description: 'Datos para crear un usuario.',
	})
	@Post()
	create(@Body() user: CreateUserDto) {
		return this.userService.create(user);
	}

	@ApiQuery({
		name: 'lab',
		required: false,
		type: 'boolean',
		example: true,
	})
	@Get()
	findAll(
		@Query(new ValidationPipe({ transform: true })) query: RelationsUserDto,
	) {
		return this.userService.findAll(query);
	}

	@ApiParam({ name: 'id', required: true, type: 'number' })
	@ApiQuery({
		name: 'lab',
		required: false,
		type: 'boolean',
		example: true,
	})
	@Get(':id')
	findOneById(
		@Param('id', ParseIntPipe) id: number,
		@Query(new ValidationPipe({ transform: true })) query: RelationsUserDto,
	) {
		return this.userService.findOneById(id, query);
	}

	@ApiParam({ name: 'id', required: true, type: 'number' })
	@ApiBody({
		type: UpdateUserDto,
		required: true,
		description: 'Datos para actualizar un usuario.',
	})
	@Patch(':id')
	update(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
		return this.userService.update(id, user);
	}

	@ApiParam({ name: 'id', required: true, type: 'number' })
	@Delete(':id')
	delete(@Param('id', ParseIntPipe) id: number) {
		return this.userService.delete(id);
	}
}
