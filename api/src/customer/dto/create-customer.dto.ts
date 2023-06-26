import { IsString, IsNotEmpty, Max, IsOptional, IsEnum } from 'class-validator';
import { CreateAccountDto } from 'src/entities/dto/create-account.dto';
import { CustomerType } from '../enums';

export class CreateCustomerDto extends CreateAccountDto {
	@IsOptional()
	@IsEnum(CustomerType)
	type?: CustomerType;

	@IsNotEmpty()
	@IsString()
	@Max(10)
	studentCode: string;

	@IsNotEmpty()
	@IsString()
	@Max(255)
	university: string;

	@IsNotEmpty()
	@IsString()
	@Max(255)
	career: string;
}
