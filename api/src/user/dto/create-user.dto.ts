import {
	IsString,
	IsNotEmpty,
	Max,
	IsOptional,
	IsEnum,
	IsDate,
} from 'class-validator';
import { CreateAccountDto } from 'src/entities/dto/create-account.dto';
import { UserRole } from '../enums';

export class CreateUserDto extends CreateAccountDto {
	@IsOptional()
	@IsEnum(UserRole)
	role?: UserRole;

	@IsNotEmpty()
	@IsString()
	@Max(255)
	jobTitle: string;

	@IsNotEmpty()
	@IsString()
	@Max(255)
	denomination: string;

	@IsNotEmpty()
	@IsDate()
	birthdate: Date;
}
