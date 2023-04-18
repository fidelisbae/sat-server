import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { BaseResponse, ListResponse } from '../common/types/response';
import { Section } from './section.entity';
import { SectionService } from './section.service';
import { CreateSectionDto } from './section.dto';

@Controller('api')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Create a section',
  })
  @ApiTags('sections')
  @Post('sections')
  async create(@Body() body: CreateSectionDto) {
    const data = await this.sectionService.create(body);

    return <BaseResponse<Section>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Get all sections',
  })
  @ApiTags('sections')
  @Get('sections')
  async findAll() {
    const data = await this.sectionService.findAll();

    return <ListResponse<Section>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      count: data.length,
      data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Get a section with id, include relations',
  })
  @ApiTags('sections')
  @Get('sections/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.sectionService.findOne(id);

    return <BaseResponse<Section>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Delete a section with id',
  })
  @ApiTags('sections')
  @Delete('sections/:id')
  async delete(@Param('id') id: number) {
    const data = await this.sectionService.delete(id);

    return <BaseResponse<Section>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }
}
