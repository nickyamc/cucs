import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class RelationsUserDto {
	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	@Transform(({ value }) => Boolean(value))
	lab?: boolean;
}
