import {
	IsOptional,
	IsDefined,
	IsNotEmptyObject,
	ValidateNested,
} from 'class-validator';
import { UpdateAccountDto } from 'src/entities/dto/update-account.dto';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import { Type } from 'class-transformer';

export class UpdateCustomerDto extends OmitType(
	PartialType(CreateCustomerDto),
	['account'] as const,
) {
	@ApiProperty({ type: UpdateAccountDto, required: false })
	@IsOptional()
	@IsDefined()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => UpdateAccountDto)
	account?: UpdateAccountDto;
}
