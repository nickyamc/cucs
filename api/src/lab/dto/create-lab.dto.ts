import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateLabDto {
	@IsNotEmpty()
	@IsString()
	@Min(3)
	@Max(20)
	suneduCode: string;

	@IsNotEmpty()
	@IsString()
	@Min(5)
	@Max(255)
	location: string;
}
