import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { getResponsePhrase } from '../common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';
import { BaseResponse, ListResponse } from '../common/types/response';
import { UpdateQuestionDto } from './question.dto';
import { QuestionService } from './question.service';
import { Question } from './question.entity';
@Controller('api')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Update a question',
  })
  @ApiTags('questions')
  @Put('questions')
  async update(@Body() body: UpdateQuestionDto) {
    const data = await this.questionService.create(body);

    return <BaseResponse<Question>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.CREATED),
      data: data,
    };
  }

  @ApiBearerAuth('access-token')
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

  @ApiBearerAuth('access-token')
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
}
