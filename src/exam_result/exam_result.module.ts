import { Module } from '@nestjs/common';
import { ExamResultController } from './exam_result.controller';
import { ExamResultService } from './exam_result.service';

@Module({
  controllers: [ExamResultController],
  providers: [ExamResultService]
})
export class ExamResultModule {}
