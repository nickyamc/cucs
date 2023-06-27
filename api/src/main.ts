import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	const config = new DocumentBuilder()
		.setTitle('CUCS API')
		.setDescription('The CUCS API description')
		.setVersion('1.0')
		.addTag('user')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();
