import { IsDate, IsOptional } from 'class-validator';
import { RelationsAttendanceDto } from './relations-attendance.sto';

export class QueryAttendanceDto extends RelationsAttendanceDto {
	@IsOptional()
	@IsDate()
	startDate?: Date;

	@IsOptional()
	@IsDate()
	endDate?: Date;
}
