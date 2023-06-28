import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Lab } from 'src/lab/lab.entity';
import { RelationsUserDto } from './dto/relations-user.dto';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
		@InjectRepository(Lab) private labRepository: Repository<Lab>,
	) {}

	findAll(query: RelationsUserDto): Promise<User[]> {
		return this.userRepository.find({
			relations: {
				...query,
			},
		});
	}

	findOneById(id: number, query: RelationsUserDto): Promise<User | null> {
		return this.userRepository.findOne({
			where: { id },
			relations: {
				...query,
			},
		});
	}

	async create(user: CreateUserDto): Promise<User | HttpException> {
		const newUser = this.userRepository.create(user);
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
