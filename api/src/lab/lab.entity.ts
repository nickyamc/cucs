import { Attendance } from 'src/attendance/attendance.entity';
import { DateColumn } from 'src/entities/dateColumn.entity';
import { Evento } from 'src/event/event.entity';
import { User } from 'src/user/user.entity';
import {
	Column,
	Entity,
	Generated,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'lab' })
export class Lab {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 20, unique: true })
	suneduCode: string;

	@Column()
	location: string;

	@Column({ name: 'qr_code', unique: true })
	@Generated('uuid')
	qrCode: string;

	@Column(() => DateColumn)
	dateColumn: DateColumn;

	@OneToMany(() => User, (user) => user.lab)
	users: User[];

	@ManyToMany(() => Evento, (evento) => evento.labs)
	events: Evento[];

	@OneToMany(() => Attendance, (attendance) => attendance.lab)
	attendances: Attendance[];
}
