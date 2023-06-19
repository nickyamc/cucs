import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Lab } from 'src/lab/lab.entity';

@Module({
	imports: [TypeOrmModule.forFeature([User, Lab])],
	providers: [UserService],
	controllers: [UserController],
})
export class UserModule {}
