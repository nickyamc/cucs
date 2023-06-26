import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
	constructor(
		@InjectRepository(Customer)
		private customerRepository: Repository<Customer>,
	) {}

	findAll(): Promise<Customer[]> {
		return this.customerRepository.find();
	}

	findOne(id: number): Promise<Customer | null> {
		return this.customerRepository.findOneBy({ id });
	}

	async create(customer: CreateCustomerDto): Promise<Customer> {
		const newCustomer = this.customerRepository.create(customer);
		return this.customerRepository.save(newCustomer);
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
