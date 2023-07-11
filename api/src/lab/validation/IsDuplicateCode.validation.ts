import { Injectable } from '@nestjs/common';
import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import { LabService } from '../lab.service';

@ValidatorConstraint({ name: 'IsDuplicateCode', async: true })
@Injectable()
export class IsDuplicateCodeConstraints
	implements ValidatorConstraintInterface
{
	constructor(private readonly labService: LabService) {}
	async validate(suneduCode: string) {
		try {
			await this.labService.notFindByCodeOrFail(suneduCode);
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
	defaultMessage(args: ValidationArguments) {
		return `El código de sunedu ${args.value} ya esta siendo utilizado.`;
	}
}
