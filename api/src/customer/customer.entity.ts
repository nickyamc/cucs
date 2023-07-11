import {
	Column,
	Entity,
	Generated,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
	RelationId,
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

	@RelationId((customer: Customer) => customer.events)
	eventIds: number[];

	@Column(() => DateRecord, { prefix: false })
	dateRecord: DateRecord;

	@ManyToMany(() => Evento, (evento) => evento.customers, { cascade: true })
	@JoinTable({
		name: 'customer_event',
		joinColumn: {
			name: 'customer_id',
		},
		inverseJoinColumn: {
			name: 'event_id',
		},
	})
	events: Evento[];

	@OneToMany(() => Attendance, (attendance) => attendance.customer)
	attendances: Attendance[];
}
