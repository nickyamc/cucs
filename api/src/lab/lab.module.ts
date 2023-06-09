import { Module } from '@nestjs/common';
import { LabService } from './lab.service';
import { LabController } from './lab.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Evento } from 'src/event/event.entity';
import { Lab } from './lab.entity';
import { Attendance } from 'src/attendance/attendance.entity';
import { EventService } from 'src/event/event.service';
import { LabExist } from './validation/IsLabAlreadyExist.validation';
import { IsCodeAlreadyExistConstrainst } from './validation/IsDuplicateCode.validation';

@Module({
	imports: [TypeOrmModule.forFeature([Lab, User, Evento, Attendance])],
	providers: [
		LabService,
		EventService,
		LabExist,
		IsCodeAlreadyExistConstrainst,
	],
	controllers: [LabController],
})
export class LabModule {}
