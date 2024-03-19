import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { APIResponseDto } from 'src/repository/dto/api-response.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UserQueryDto } from './dto/user-query.dto';
import { UserFilter } from './filters/user.filter';

@Injectable()
export class UserService {

  constructor(
    @InjectModel(User)
    private UserRepository: typeof User
  ) {}

  async create(createUserDto: CreateUserDto): Promise<APIResponseDto> {
    let user = await this.getUserByEmail(createUserDto.email);
    if (user) throw new ConflictException('User already created');
    try { await this.UserRepository.create({ ...(await this.getUserInstance(createUserDto)) }); }
    catch(err) { throw new BadRequestException('Bad request'); }
    return new APIResponseDto('User Created');
  }

  async findAll(userQueryDto: UserQueryDto): Promise<UserDto[]> {
    let userFilter = new UserFilter(userQueryDto);
    let users = await this.UserRepository.findAll({
      where: { ...userFilter },
      order: [['createdAt', 'DESC']],
    });
    if (!(users.length > 0)) throw new NotFoundException('No User Found');
    return users.map(user => new UserDto(user));
  }

  async delete(id: number): Promise<APIResponseDto> {
    try { this.UserRepository.destroy({ where: { id } }); } 
    catch (error) { throw new BadRequestException('Failed to delete user'); }
    return new APIResponseDto('User deleted');
  }

  private async getUserByEmail(email: string): Promise<User> {
    return await this.UserRepository.findOne({ where: { email } });
  }

  private async hashPassword(password:string): Promise<string> {
    return await bcrypt.hash(password, 1);
  }

  private async getUserInstance(createUserDto: CreateUserDto): Promise<User> {
    let user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.phoneNumber = createUserDto.phoneNumber
    user.email = createUserDto.email;
    user.dateOfBirth = new Date(createUserDto.dateOfBirth);
    user.password = await this.hashPassword(createUserDto.password);
    return user.toJSON();
  }
}
