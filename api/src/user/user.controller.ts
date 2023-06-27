import {
	Body,
	Controller,
	Get,
	ParseIntPipe,
	Post,
	Query,
	ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RelationsUserDto } from './dto/relations-user.dto';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@Post()
	create(
		@Body() user: CreateUserDto,
		@Query('labId', ParseIntPipe) labId: number,
	) {
		return this.userService.create(user, labId);
	}

	@Get()
	findAll(
		@Query(new ValidationPipe({ transform: true })) query: RelationsUserDto,
	) {
		return this.userService.findAll();
	}
}
