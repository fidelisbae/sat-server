import { Module } from '@nestjs/common';
import { QuestionResultController } from './question_result.controller';
import { QuestionResultService } from './question_result.service';

@Module({
  controllers: [QuestionResultController],
  providers: [QuestionResultService]
})
export class QuestionResultModule {}
