import { Module } from '@nestjs/common';
import { QuestionResultController } from './question_result.controller';
import { QuestionResultService } from './question_result.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionResult } from './question_result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionResult])],
  controllers: [QuestionResultController],
  providers: [QuestionResultService],
  exports: [QuestionResultService],
})
export class QuestionResultModule {}
