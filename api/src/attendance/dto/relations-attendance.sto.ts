import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class RelationsAttendanceDto {
	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	@Transform(({ value }) => Boolean(value))
	customer?: boolean;

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	@Transform(({ value }) => Boolean(value))
	lab?: boolean;

	@IsOptional()
	@IsBoolean()
	@Type(() => Boolean)
	@Transform(({ value }) => Boolean(value))
	event?: boolean;
}
