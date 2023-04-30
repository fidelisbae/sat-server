import { Body, ConflictException, Controller, Post, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ExamResultService } from './exam_result.service';
import { CreateExamResultDto } from './exam_result.dto';

@Controller('api')
export class ExamResultController {
  constructor(private readonly examResultService: ExamResultService) {}

  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: 'Create exam result',
  })
  @ApiTags('exam-results')
  @Post('exam-results')
  async create(@Req() req: any) {
    if (req.user.isTeacher) {
      throw new ConflictException('You are not a student');
    }

    if (req.user.exam_id === null) {
      throw new ConflictException('You are not in an exam');
    }

    console.log(req.user);

    return true;
  }
}
