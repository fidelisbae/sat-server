import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionResult } from './question_result.entity';
import { Repository } from 'typeorm';
import { ENTIRE_EXAM_QUESTION_NUMBER } from 'src/common/constants/question-numbers';

@Injectable()
export class QuestionResultService {
  constructor(
    @InjectRepository(QuestionResult)
    private readonly questionResultRepository: Repository<QuestionResult>,
  ) {}

  async createQuestionResults(exam_result_id: number, answers: string[]) {
    for (let i = 1; i <= ENTIRE_EXAM_QUESTION_NUMBER; i++) {
      await this.questionResultRepository.save({
        number: i,
        your_answer: answers[i - 1],
        exam_result_id,
      });
    }
  }
}
