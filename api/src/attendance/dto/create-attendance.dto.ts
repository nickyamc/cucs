import { IsNotEmpty, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class CreateAttendanceDto {
	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	customerId: number;

	@IsNotEmpty()
	@IsNumber()
	@IsPositive()
	labId: number;

	@IsOptional()
	@IsNumber()
	@IsPositive()
	eventId?: number;
}
