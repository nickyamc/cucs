import { Attendance } from 'src/attendance/attendance.entity';
import { Customer } from 'src/customer/customer.entity';
import { DateColumn } from 'src/entities/dateColumn.entity';
import { Lab } from 'src/lab/lab.entity';
import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'event' })
export class Evento {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column({ type: 'text' })
	description: string;

	@Column()
	location: string;

	@Column(() => DateColumn, { prefix: false })
	dateColumn: DateColumn;

	@ManyToMany(() => Lab, (lab) => lab.events)
	@JoinTable({
		name: 'event_lab',
		joinColumn: {
			name: 'event_id',
		},
		inverseJoinColumn: {
			name: 'lab_id',
		},
	})
	labs: Lab[];

	@ManyToMany(() => Customer, (customer) => customer.events)
	@JoinTable({
		name: 'event_customer',
		joinColumn: {
			name: 'event_id',
		},
		inverseJoinColumn: {
			name: 'customer_id',
		},
	})
	customers: Customer[];

	@OneToMany(() => Attendance, (attendance) => attendance.event)
	attendances: Attendance[];
}
