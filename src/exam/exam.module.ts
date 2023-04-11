import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Exam } from './exam.entity';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { Section } from '../section/section.entity';
import { Modular } from '../modular/modular.entity';
import { Question } from '../question/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exam, Section, Modular, Question])],
  controllers: [ExamController],
  providers: [ExamService],
})
export class ExamModule {}
