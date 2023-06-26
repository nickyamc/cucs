import { Customer } from 'src/customer/customer.entity';
import { DateColumn } from 'src/entities/dateColumn.entity';
import { Evento } from 'src/event/event.entity';
import { Lab } from 'src/lab/lab.entity';
import {
	Column,
	Entity,
	Generated,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'attedance' })
export class Attendance {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'check_code', unique: true })
	@Generated('uuid')
	checkCode: string;

	@Column(() => DateColumn)
	dateColumn: DateColumn;

	@ManyToOne(() => Customer, (customer) => customer.attendances)
	@JoinColumn({ name: 'customer_id' })
	customer: Customer;

	@ManyToOne(() => Lab, (lab) => lab.attendances)
	@JoinColumn({ name: 'lab_id' })
	lab: Lab;

	@ManyToOne(() => Evento, (event) => event.attendances)
	@JoinColumn({ name: 'event_id' })
	event: Evento;
}
