import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Lab } from 'src/lab/lab.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
		@InjectRepository(Lab) private labRepository: Repository<Lab>,
	) {}

	findAll(): Promise<User[]> {
		return this.userRepository.find();
	}

	findOne(id: number): Promise<User | null> {
		return this.userRepository.findOneBy({ id });
	}

	async create(
		user: CreateUserDto,
		labId: number,
	): Promise<User | HttpException> {
		const newUser = this.userRepository.create(user);
		const lab = await this.labRepository.findOneBy({ id: labId });
		if (lab === null)
			return new HttpException(
				'El Laboratorio no existe.',
				HttpStatus.NOT_FOUND,
			);
		newUser.lab = lab;
		return this.userRepository.save(newUser);
	}

	async update(id: number, user: UpdateUserDto) {
		return this.userRepository.update({ id }, user);
	}

	async delete(id: number): Promise<any> {
		const result = await this.userRepository.softDelete({ id });
		return result.affected === 0
			? new HttpException('El Usuario no existe.', HttpStatus.NOT_FOUND)
			: result;
	}
}
