import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExamResultController } from './exam_result.controller';
import { ExamResultService } from './exam_result.service';
import { ExamResult } from './exam_result.entity';
import { QuestionResultModule } from 'src/question_result/question_result.module';

@Module({
  imports: [TypeOrmModule.forFeature([ExamResult]), QuestionResultModule],
  controllers: [ExamResultController],
  providers: [ExamResultService],
})
export class ExamResultModule {}
