import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RepositoryModule } from 'src/repository/repository.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [RepositoryModule],
  exports: [UserService]
})
export class UserModule {}
