import { Injectable } from '@nestjs/common';
import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface,
} from 'class-validator';
import { LabService } from '../lab.service';

@ValidatorConstraint({ name: 'labExist', async: true })
@Injectable()
export class LabExist implements ValidatorConstraintInterface {
	constructor(private readonly labService: LabService) {}
	async validate(id: number) {
		try {
			await this.labService.findOne(id);
			return true;
		} catch (error) {
			return false;
		}
	}
	defaultMessage(args: ValidationArguments) {
		return `El Laboratorio con id ${args.value} no existe.`;
	}
}
