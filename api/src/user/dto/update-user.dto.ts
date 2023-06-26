import { IsString, Max, IsOptional, IsEnum, IsDate } from 'class-validator';
import { UpdateAccountDto } from 'src/entities/dto/update-account.dto';
import { UserRole } from '../enums';

export class UpdateUserDto extends UpdateAccountDto {
	@IsOptional()
	@IsEnum(UserRole)
	email: UserRole;

	@IsOptional()
	@IsString()
	@Max(255)
	jobTitle: string;

	@IsOptional()
	@IsString()
	@Max(255)
	denomination: string;

	@IsOptional()
	@IsDate()
	birthdate: Date;
}
