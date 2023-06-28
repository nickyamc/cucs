import { ValidationOptions, registerDecorator } from 'class-validator';
import { LabExist } from '../validation/lab-exist.validation';

export function IsLabExist(validationOptions?: ValidationOptions) {
	return function (object: any, propertyName: string) {
		registerDecorator({
			name: 'IsLabExist',
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: LabExist,
		});
	};
}
