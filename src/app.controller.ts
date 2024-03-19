import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { APIResponseDto } from './repository/dto/api-response.dto';
import { Public } from './repository/constants/public-decorator.constants';

@ApiTags('Application')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): APIResponseDto {
    return this.appService.healthCheck();
  }
}
