import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './enums';
import { DateColumn } from 'src/entities/dateColumn.entity';
import { Account } from 'src/entities/account.entity';
import { Lab } from 'src/lab/lab.entity';

@Entity({ name: 'user' })
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column(() => Account)
	account: Account;

	@Column({
		type: 'enum',
		enum: UserRole,
		default: UserRole.EMPLOYEE,
	})
	role: UserRole;

	@Column({ name: 'job_title' })
	jobTitle: string;

	@Column()
	denomination: string;

	@Column({ type: 'date' })
	birthdate: Date;

	@Column({ name: 'is_active', default: false })
	isActive: boolean;

	@Column(() => DateColumn)
	dateColumn: DateColumn;

	@ManyToOne(() => Lab, (lab) => lab.users)
	lab: Lab;
}
