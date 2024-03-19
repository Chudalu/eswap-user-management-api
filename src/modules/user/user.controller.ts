import { Controller, Get, Post, Body, HttpCode, HttpStatus, Query, Delete, ParseIntPipe, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { APIResponseDto } from 'src/repository/dto/api-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserQueryDto } from './dto/user-query.dto';
import { UserDto } from './dto/user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createUser: CreateUserDto): Promise<APIResponseDto> {
    return await this.userService.create(createUser);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(@Query() userQuery: UserQueryDto): Promise<UserDto[]> {
    return await this.userService.findAll(userQuery);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe()) id: number){
    return await this.userService.delete(id);
  }

}
