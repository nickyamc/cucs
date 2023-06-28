import {
	Column,
	Entity,
	Generated,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { CustomerType } from './enums';
import { DateRecord } from 'src/entities/dateRecord.entity';
import { Account } from 'src/entities/account.entity';
import { Evento } from 'src/event/event.entity';
import { Attendance } from 'src/attendance/attendance.entity';

@Entity({ name: 'customer' })
export class Customer {
	@PrimaryGeneratedColumn()
	id: number;

	@Column(() => Account, { prefix: false })
	account: Account;

	@Column({
		type: 'enum',
		enum: CustomerType,
		default: CustomerType.STUDENT,
	})
	type: CustomerType;

	@Column({ name: 'student_code', unique: true })
	studentCode: string;

	@Column({ name: 'qr_code', unique: true })
	@Generated('uuid')
	qrCode: string;

	@Column()
	university: string;

	@Column()
	career: string;

	@Column(() => DateRecord, { prefix: false })
	dateRecord: DateRecord;

	@ManyToMany(() => Evento, (evento) => evento.customers)
	events: Evento[];

	@OneToMany(() => Attendance, (attendance) => attendance.customer)
	attendances: Attendance[];
}
