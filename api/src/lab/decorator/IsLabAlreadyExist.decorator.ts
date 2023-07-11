import { ValidationOptions, registerDecorator } from 'class-validator';
import { IsLabAlreadyExistContraints } from '../validation/IsLabAlreadyExist.validation';

export function IsLabAlreadyExist(validationOptions?: ValidationOptions) {
	return function (object: any, propertyName: string) {
		registerDecorator({
			name: 'IsLabAlreadyExist',
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: IsLabAlreadyExistContraints,
		});
	};
}
