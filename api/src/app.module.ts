import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LabModule } from './lab/lab.module';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';
import { CustomerModule } from './customer/customer.module';
import { AuthModule } from './auth/auth.module';
import { AttendanceModule } from './attendance/attendance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Customer } from './customer/customer.entity';
import { Evento } from './event/event.entity';
import { Lab } from './lab/lab.entity';
import { Attendance } from './attendance/attendance.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: `${process.cwd()}/.env.${'dev'}`,
			load: [configuration],
			isGlobal: true,
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configureService: ConfigService) => ({
				type: 'mysql',
				host: configureService.get<string>('database.host'),
				port: configureService.get<number>('database.port'),
				username: configureService.get<string>('database.username'),
				password: configureService.get<string>('database.password'),
				database: configureService.get<string>('database.database'),
				entities: [User, Customer, Evento, Lab, Attendance],
				synchronize: true,
				dropSchema: true,
			}),
			inject: [ConfigService],
		}),
		LabModule,
		EventModule,
		UserModule,
		CustomerModule,
		AuthModule,
		AttendanceModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
