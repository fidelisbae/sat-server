import {
  Body,
  ConflictException,
  Controller,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { ExamResultService } from './exam_result.service';
import { CreateExamResultDto } from './exam_result.dto';
import { QuestionResultService } from '../question_result/question_result.service';
import { BaseResponse } from 'src/common/types/response';
import { ExamResult } from './exam_result.entity';
import { getResponsePhrase } from 'src/common/utils/http';
import { STATUS_CODES } from '../common/constants/http-status';

@Controller('api')
export class ExamResultController {
  constructor(
    private readonly examResultService: ExamResultService,
    private readonly questionResultService: QuestionResultService,
  ) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Create exam result',
  })
  @ApiTags('exam-results')
  @Post('exam-results')
  async create(@Req() req: any, @Body() body: CreateExamResultDto) {
    if (req.user.is_teacher) {
      throw new ConflictException('You are not a student');
    }

    if (req.user.exam_id === null) {
      throw new ConflictException('You are not in an exam');
    }

    const isExist = await this.examResultService.findByUserId(req.user.id);

    if (isExist) {
      await this.examResultService.deleteExamResult(isExist.id);
    }

    const examResult = await this.examResultService.createExamResult(
      req.user.id,
      req.user.exam_id,
    );

    await this.questionResultService.createQuestionResults(
      examResult.id,
      body.answers,
    );

    return <BaseResponse<ExamResult>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: examResult,
    };
  }

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Get exam result by user id',
  })
  @ApiParam({
    name: 'user_id',
    type: String,
    required: true,
  })
  @ApiTags('exam-results')
  @Get('exam-results/:user_id')
  async findByUserId(@Param('user_id') user_id: string) {
    const examResult = await this.examResultService.findByUserId(user_id);

    return <BaseResponse<ExamResult>>{
      result: true,
      message: getResponsePhrase(STATUS_CODES.OK),
      data: examResult,
    };
  }
}
