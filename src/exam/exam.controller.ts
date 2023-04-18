import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { BaseResponse, ListResponse } from '../common/types/response';
import { ExamService } from './exam.service';
import { CreateExamDto } from './exam.dto';
import { Exam } from './exam.entity';

@Controller('api')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get all exams',
  })
  @ApiTags('exams')
  @Get('exams')
  async findAll() {
    const data = await this.examService.findAll();

    return <ListResponse<Exam>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      count: data.length,
      data,
    };
  }

  @ApiOperation({
    summary: 'Get an exam with id, include relations',
  })
  @ApiTags('exams')
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Exam id',
  })
  @Get('exams/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.examService.findOne(id);

    return <BaseResponse<Exam>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }

  @ApiOperation({
    summary: 'Create an exam',
  })
  @ApiTags('exams')
  @Post('exams')
  async create(@Body() body: CreateExamDto) {
    const data = await this.examService.create(body);

    return <BaseResponse<Exam>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiOperation({
    summary: 'Delete an exam with id',
  })
  @ApiTags('exams')
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Exam id',
  })
  @Delete('exams/:id')
  async delete(@Param('id') id: number) {
    const data = await this.examService.delete(id);

    return <BaseResponse<Exam>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }
}
