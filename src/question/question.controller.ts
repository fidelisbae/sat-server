import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { BaseResponse, ListResponse } from '../common/types/response';
import { CreateQuestionDto } from './question.dto';
import { QuestionService } from './question.service';
import { Question } from './question.entity';
@Controller('api')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Create a question',
  })
  @ApiTags('questions')
  @Post('questions')
  async create(@Body() body: CreateQuestionDto) {
    const data = await this.questionService.create(body);

    return <BaseResponse<Question>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Get all questions',
  })
  @ApiTags('questions')
  @Get('questions')
  async findAll() {
    const data = await this.questionService.findAll();

    return <ListResponse<Question>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      count: data.length,
      data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Get a question with id',
  })
  @ApiTags('questions')
  @Get('questions/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.questionService.findOne(id);

    return <BaseResponse<Question>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Delete a question with id',
  })
  @ApiTags('questions')
  @Delete('questions/:id')
  async delete(@Param('id') id: number) {
    const data = await this.questionService.delete(id);

    return <BaseResponse<Question>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: data,
    };
  }
}
