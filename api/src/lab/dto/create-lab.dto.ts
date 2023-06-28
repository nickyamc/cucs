import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateLabDto {
	@ApiProperty({
		description: 'Código sunedu del laboratorio.',
		minLength: 3,
		maxLength: 20,
	})
	@IsNotEmpty()
	@IsString({ message: 'El código sunedu del laboratorio debe ser un texto.' })
	@Length(3, 20, {
		message:
			'El código sunedu del laboratorio debe tener entre 3 y 20 caracteres.',
	})
	suneduCode: string;

	@ApiProperty({
		description: 'Ubicación del laboratorio.',
		minLength: 1,
		maxLength: 255,
	})
	@IsNotEmpty()
	@IsString({ message: 'La ubicación del laboratorio debe ser un texto.' })
	@Length(1, 255, {
		message:
			'La ubicación del laboratorio debe tener entre 1 y 255 caracteres.',
	})
	location: string;
}
