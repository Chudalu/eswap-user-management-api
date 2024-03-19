import { Module } from '@nestjs/common';
import { RepositoryService } from './repository.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/modules/user/entities/user.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User
    ])
  ],
  exports: [SequelizeModule],
  providers: [RepositoryService]
})
export class RepositoryModule { }
