import {
	IsString,
	IsNotEmpty,
	IsOptional,
	IsEnum,
	Length,
	IsDefined,
	IsNotEmptyObject,
	ValidateNested,
	IsArray,
	IsInt,
	ArrayMinSize,
} from 'class-validator';
import { CreateAccountDto } from 'src/entities/dto/create-account.dto';
import { CustomerType } from '../enums';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEventsExist } from 'src/event/decorator/IsEventsExist.decorator';

export class CreateCustomerDto {
	@ApiProperty({ type: CreateAccountDto })
	@IsDefined()
	@IsNotEmptyObject()
	@ValidateNested()
	@Type(() => CreateAccountDto)
	account: CreateAccountDto;

	@ApiProperty({
		description: 'Tipo de cliente',
		enum: CustomerType,
		default: CustomerType.STUDENT,
		type: CustomerType,
	})
	@IsOptional()
	@IsEnum(CustomerType)
	type?: CustomerType;

	@ApiProperty({
		description: 'Código de estudiante',
		type: String,
		minLength: 8,
		maxLength: 10,
	})
	@IsNotEmpty()
	@IsString()
	@Length(8, 10, {
		message: 'El código de estudiante debe tener entre 8 a 10 caracteres',
	})
	studentCode: string;

	@ApiProperty({
		description: 'Nombre de la Universidad',
		type: String,
		minLength: 8,
		maxLength: 255,
	})
	@IsNotEmpty()
	@IsString()
	@Length(8, 255)
	university: string;

	@ApiProperty({
		description: 'Nombre de la Carrera',
		type: String,
		minLength: 8,
		maxLength: 255,
	})
	@IsNotEmpty()
	@IsString()
	@Length(8, 255)
	career: string;

	@ApiProperty({
		description:
			'Array de ids de los eventos a los que pertenece el laboratorio.',
		type: [Number],
		required: true,
	})
	@IsNotEmpty()
	@IsArray()
	@IsInt({
		each: true,
		message: 'El id del evento debe ser un número.',
	})
	@ArrayMinSize(1, {
		message: 'El laboratorio debe pertenecer a al menos un evento.',
	})
	@IsEventsExist()
	eventIds: number[];
}
