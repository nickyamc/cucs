import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { In, Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { RelationsCustomerDto } from './dto/relations-customer.dto';
import { Evento } from 'src/event/event.entity';

@Injectable()
export class CustomerService {
	constructor(
		@InjectRepository(Customer)
		private customerRepository: Repository<Customer>,
		@InjectRepository(Evento) private eventRepository: Repository<Evento>,
	) {}

	async create(customer: CreateCustomerDto): Promise<Customer> {
		const newCustomer = this.customerRepository.create(customer);
		const events = await this.eventRepository.findBy({
			id: In(customer.eventIds),
		});
		newCustomer.events = events;
		return this.customerRepository.save(newCustomer);
	}

	async findAll(relations: RelationsCustomerDto): Promise<Customer[]> {
		const customers = await this.customerRepository.find({
			relations,
		});
		return customers;
	}

	async findOneById(
		id: number,
		relations: RelationsCustomerDto,
	): Promise<Customer | null> {
		const customer = await this.customerRepository.findOne({
			where: { id },
			relations,
		});
		return customer;
	}

	async update(id: number, customer: UpdateCustomerDto) {
		return this.customerRepository.update({ id }, customer);
	}

	async delete(id: number): Promise<any> {
		const result = await this.customerRepository.softDelete({ id });
		return result.affected === 0
			? new HttpException('El Visitante no existe.', HttpStatus.NOT_FOUND)
			: result;
	}
}
