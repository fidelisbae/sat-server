import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { BaseResponse, ListResponse } from '../common/types/response';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Create a user',
  })
  @ApiTags('users')
  @Post('users')
  async create(@Body() body: CreateUserDto) {
    const data = await this.userService.create(body);

    return <BaseResponse<User>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiOperation({
    summary: 'Get all users',
  })
  @ApiTags('users')
  @Get('users')
  async findAll() {
    const data = await this.userService.findAll();

    return <ListResponse<User>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      count: data.length,
      data,
    };
  }

  @ApiOperation({
    summary: 'Get a user with id',
  })
  @ApiTags('users')
  @Get('users/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.userService.findOne(id);

    return <BaseResponse<User>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }

  @ApiOperation({
    summary: 'Delete a user with id',
  })
  @ApiTags('users')
  @Delete('users/:id')
  async delete(@Param('id') id: string) {
    const data = await this.userService.delete(id);

    return <BaseResponse<User>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }
}
