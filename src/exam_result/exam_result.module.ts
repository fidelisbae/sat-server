import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExamResultController } from './exam_result.controller';
import { ExamResultService } from './exam_result.service';
import { ExamResult } from './exam_result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamResult])],
  controllers: [ExamResultController],
  providers: [ExamResultService],
})
export class ExamResultModule {}
