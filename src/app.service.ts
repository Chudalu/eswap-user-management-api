import { Injectable } from '@nestjs/common';
import { APIResponseDto } from './repository/dto/api-response.dto';

@Injectable()
export class AppService {
  healthCheck(): APIResponseDto {
    return new APIResponseDto('Server is healthy!');
  }
}
