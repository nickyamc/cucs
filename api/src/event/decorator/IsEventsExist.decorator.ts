import { ValidationOptions, registerDecorator } from 'class-validator';
import { EventsExist } from '../validation/eventsExist.validation';

export function IsEventsExist(validationOptions?: ValidationOptions) {
	return function (object: any, propertyName: string) {
		registerDecorator({
			name: 'IsLabExist',
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: EventsExist,
		});
	};
}
