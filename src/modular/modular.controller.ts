import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { BaseResponse, ListResponse } from '../common/types/response';
import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { ModularService } from './modular.service';
import { CreateModularDto } from './modular.dto';
import { Modular } from './modular.entity';

@Controller('api')
export class ModularController {
  constructor(private readonly modularService: ModularService) {}

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Create a modular',
  })
  @ApiTags('modulars')
  @Post('modulars')
  async create(@Body() body: CreateModularDto) {
    const data = await this.modularService.create(body);

    return <BaseResponse<Modular>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Get all modulars',
  })
  @ApiTags('modulars')
  @Get('modulars')
  async findAll() {
    const data = await this.modularService.findAll();

    return <ListResponse<Modular>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      count: data.length,
      data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Get a modular with id, include relations',
  })
  @ApiTags('modulars')
  @Get('modulars/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.modularService.findOne(id);

    return <BaseResponse<Modular>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Delete a modular with id',
  })
  @ApiTags('modulars')
  @Delete('modulars/:id')
  async delete(@Param('id') id: number) {
    const data = await this.modularService.delete(id);

    return <BaseResponse<Modular>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }
}
