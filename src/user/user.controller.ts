import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { BaseResponse, ListResponse } from '../common/types/response';
import { AllocateExamDto, CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Public } from '../common/utils/public';
import { UpdateResult } from 'typeorm';
@Controller('api')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Create a user',
  })
  @ApiTags('users')
  @Post('users')
  async create(@Body() body: CreateUserDto) {
    const data = await this.userService.create(body);
    delete data.password;

    return <BaseResponse<User>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiBearerAuth('access-token')
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

  @ApiBearerAuth('access-token')
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

  @ApiBearerAuth('access-token')
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

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Allocate an exam to a user',
  })
  @ApiTags('users')
  @Patch('users/allocate')
  async allocate(@Body() body: AllocateExamDto) {
    const data = await this.userService.allocate(body);

    return <BaseResponse<User>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }
}
