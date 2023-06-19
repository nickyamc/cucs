import { Customer } from 'src/customer/customer.entity';
import { DateColumn } from 'src/entities/dateColumn.entity';
import { Evento } from 'src/event/event.entity';
import { Lab } from 'src/lab/lab.entity';
import {
	Column,
	Entity,
	Generated,
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
	customer: Customer;

	@ManyToOne(() => Lab, (lab) => lab.attendances)
	lab: Lab;

	@ManyToOne(() => Evento, (evento) => evento.attendances)
	event: Evento;
}
