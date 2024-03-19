import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { APIResponseDto } from 'src/repository/dto/api-response.dto';
import { NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [
        RepositoryModule,
        SequelizeModule.forRoot({
          dialect: 'sqlite',
          storage: './test-database.sqlite',
          autoLoadModels: true,
          synchronize: true,
          logging: false,
          sync: { force: true }
        }),
      ]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      let user = await service.create({
        firstName: 'Chudalu',
        lastName: 'Ezenwafor',
        password: 'Password123@', 
        email: 'chudalu@gmail.com',
        dateOfBirth: '06-04-1996',
        phoneNumber: '07012124899'
      });
      expect(user).toMatchObject(new APIResponseDto('User Created'));
    });
  });

  describe('findAll', () => {
    it('should return all created users', async () => {
      await service.create({
        firstName: 'Chudalu',
        lastName: 'Ezenwafor',
        password: 'Password123@', 
        email: 'chudalu@gmail.com',
        dateOfBirth: '06-04-1996',
        phoneNumber: '07012124899'
      });
      let users: UserDto[] = await service.findAll({});
      expect(users).toBeDefined();
      expect(users).toHaveLength(1);
    });

    it('should throw not found error', async () => {
      let users: UserDto[];
      try {
        users = await service.findAll({});
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
      expect(users).toBeUndefined();
    });
  });

});
