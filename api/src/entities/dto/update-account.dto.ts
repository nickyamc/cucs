import {
	IsString,
	IsEmail,
	IsPhoneNumber,
	Max,
	IsOptional,
} from 'class-validator';

export class UpdateAccountDto {
	@IsOptional()
	@IsEmail()
	email?: string;

	@IsOptional()
	@IsString()
	@Max(15)
	username?: string;

	@IsOptional()
	@IsString()
	@Max(255)
	firstName?: string;

	@IsOptional()
	@IsString()
	@Max(255)
	lastName?: string;

	@IsOptional()
	@IsPhoneNumber('PE')
	phone?: string;
}
