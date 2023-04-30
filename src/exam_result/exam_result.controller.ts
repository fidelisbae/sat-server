import { Body, ConflictException, Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ExamResultService } from './exam_result.service';
import { CreateExamResultDto } from './exam_result.dto';
import { QuestionResultService } from '../question_result/question_result.service';

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

    const examResult = await this.examResultService.createExamResult(
      req.user.id,
      req.user.exam_id,
    );

    const questionResults =
      await this.questionResultService.createQuestionResults(
        examResult.id,
        body.answers,
      );

    return true;
  }
}
