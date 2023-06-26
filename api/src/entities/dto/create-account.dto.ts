import {
	IsString,
	IsEmail,
	IsPhoneNumber,
	IsNotEmpty,
	Max,
} from 'class-validator';

export class CreateAccountDto {
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsString()
	@Max(50)
	username: string;

	@IsNotEmpty()
	@IsString()
	password: string;

	@IsNotEmpty()
	@IsString()
	@Max(255)
	firstName: string;

	@IsNotEmpty()
	@IsString()
	@Max(255)
	lastName: string;

	@IsNotEmpty()
	@IsPhoneNumber('PE')
	phone: string;
}
