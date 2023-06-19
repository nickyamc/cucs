import { Column } from 'typeorm';

export class Account {
	@Column()
	email: string;

	@Column({ length: 15 })
	username: string;

	@Column({ type: 'text' })
	password: string;

	@Column({ name: 'first_name' })
	firstName: string;

	@Column({ name: 'last_name' })
	lastName: string;

	@Column({ length: 12 })
	phone: string;
}
