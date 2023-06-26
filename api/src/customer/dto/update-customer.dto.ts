import { IsString, Max, IsOptional, IsEnum } from 'class-validator';
import { CustomerType } from '../enums';
import { UpdateAccountDto } from 'src/entities/dto/update-account.dto';

export class UpdateCustomerDto extends UpdateAccountDto {
	@IsOptional()
	@IsEnum(CustomerType)
	type?: CustomerType;

	@IsOptional()
	@IsString()
	@Max(10)
	studentCode?: string;

	@IsOptional()
	@IsString()
	@Max(255)
	university?: string;

	@IsOptional()
	@IsString()
	@Max(255)
	career?: string;
}
