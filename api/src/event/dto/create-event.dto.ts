import { IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateEventDto {
	@IsNotEmpty()
	@IsString()
	@Min(5)
	@Max(255)
	title: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsNotEmpty()
	@IsString()
	@Min(5)
	@Max(255)
	location: string;
}
