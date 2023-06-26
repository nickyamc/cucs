import { IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateEventDto {
	@IsOptional()
	@IsString()
	@Min(5)
	@Max(255)
	title?: string;

	@IsOptional()
	@IsString()
	description?: string;

	@IsOptional()
	@IsString()
	@Min(5)
	@Max(255)
	location?: string;
}
