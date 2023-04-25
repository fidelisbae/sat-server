import { Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

import { ExamResultService } from './exam_result.service';

@Controller('api')
export class ExamResultController {
  constructor(private readonly examResultService: ExamResultService) {}

  @ApiBearerAuth('access-token or refresh-token')
  @ApiOperation({
    summary: 'Create exam result',
  })
  @ApiTags('exam-results')
  @Post('exam-results')
  async create() {
    return true;
  }
}
