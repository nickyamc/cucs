import { ValidationOptions, registerDecorator } from 'class-validator';
import { IsDuplicateCodeConstraints } from '../validation/IsDuplicateCode.validation';

export function IsDuplicateCode(validationOptions?: ValidationOptions) {
	return function (object: any, propertyName: string) {
		registerDecorator({
			name: 'IsDuplicateCode',
			target: object.constructor,
			propertyName: propertyName,
			options: validationOptions,
			validator: IsDuplicateCodeConstraints,
		});
	};
}
