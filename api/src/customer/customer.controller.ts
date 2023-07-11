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
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { RelationsCustomerDto } from './dto/relations-customer.dto';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
	constructor(private customerService: CustomerService) {}

	@ApiBody({ type: CreateCustomerDto })
	@Post()
	async create(@Body() customer: CreateCustomerDto) {
		return await this.customerService.create(customer);
	}

	@ApiQuery({ name: 'events', type: Boolean })
	@ApiQuery({ name: 'attendances', type: Boolean })
	@Get()
	async findAll(@Query() relations: RelationsCustomerDto) {
		return await this.customerService.findAll(relations);
	}

	@ApiParam({ name: 'id', type: Number })
	@ApiQuery({ name: 'events', type: Boolean })
	@ApiQuery({ name: 'attendances', type: Boolean })
	@Get(':id')
	async findOnebyId(
		@Param('id', ParseIntPipe) id: number,
		@Query() relations: RelationsCustomerDto,
	) {
		return await this.customerService.findOneById(id, relations);
	}

	@ApiParam({ name: 'id', type: Number })
	@ApiBody({ type: UpdateCustomerDto })
	@Patch(':id')
	async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() customer: UpdateCustomerDto,
	) {
		return await this.customerService.update(id, customer);
	}

	@ApiParam({ name: 'id', type: Number })
	@Delete(':id')
	async delete(@Param('id', ParseIntPipe) id: number) {
		return await this.customerService.delete(id);
	}
}
