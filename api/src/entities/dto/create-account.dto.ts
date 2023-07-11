import { ApiProperty } from '@nestjs/swagger';
import {
	IsString,
	IsEmail,
	IsPhoneNumber,
	IsNotEmpty,
	Length,
} from 'class-validator';

export class CreateAccountDto {
	@ApiProperty({ description: 'Email de la cuenta.', minimum: 1, maximum: 255 })
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@ApiProperty({
		description: 'Nombre de usuario de la cuenta.',
		minimum: 1,
		maximum: 15,
	})
	@IsNotEmpty()
	@IsString()
	@Length(1, 15)
	username: string;

	@ApiProperty({
		description: 'Contraseña de la cuenta',
		minimum: 1,
		maximum: 50,
	})
	@IsNotEmpty()
	@IsString()
	@Length(1, 50)
	password: string;

	@ApiProperty({
		description: 'Nombres de la cuenta',
		minimum: 1,
		maximum: 255,
	})
	@IsNotEmpty()
	@IsString()
	@Length(1, 255)
	firstName: string;

	@ApiProperty({
		description: 'Apellidos de la cuenta',
		minimum: 1,
		maximum: 255,
	})
	@IsNotEmpty()
	@IsString()
	@Length(1, 255)
	lastName: string;

	@ApiProperty({
		description: 'Número de telefono de la cuenta.',
		minimum: 1,
		maximum: 12,
	})
	@IsNotEmpty()
	@IsPhoneNumber('PE')
	phone: string;
}
