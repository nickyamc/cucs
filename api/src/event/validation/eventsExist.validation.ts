import { Injectable } from '@nestjs/common';
import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import { EventService } from '../event.service';

@ValidatorConstraint({ name: 'eventsExist', async: true })
@Injectable()
export class EventsExist implements ValidatorConstraintInterface {
	constructor(private readonly eventService: EventService) {}
	async validate(ids: number[]) {
		try {
			await this.eventService.findAllOrFail(ids);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	defaultMessage(args: ValidationArguments) {
		return `El Evento con id ${args.value} no existe.`;
	}
}
