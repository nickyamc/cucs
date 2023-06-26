import { IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateLabDto {
	@IsOptional()
	@IsString()
	@Min(3)
	@Max(20)
	suneduCode?: string;

	@IsOptional()
	@IsString()
	@Min(3)
	@Max(255)
	location?: string;
}
