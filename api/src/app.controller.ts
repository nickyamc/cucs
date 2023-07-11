import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('version')
	version(): string {
		return this.appService.version();
	}

	@Get('team')
	developerTeam() {
		return this.appService.developerTeam();
	}
}
