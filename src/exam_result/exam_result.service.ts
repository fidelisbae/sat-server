import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { ExamResult } from './exam_result.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExamResultService {
  constructor(
    @InjectRepository(ExamResult)
    private readonly examResultRepository: Repository<ExamResult>,
  ) {}

  async createExamResult(
    user_id: string,
    exam_id: number,
  ): Promise<ExamResult> {
    return await this.examResultRepository.save({
      user_id,
      exam_id,
    });
  }

  async findAllByUserId(user_id: string): Promise<ExamResult[]> {
    return await this.examResultRepository.find({
      where: {
        user_id,
      },
    });
  }

  async findOne(id: number): Promise<ExamResult> {
    return await this.examResultRepository.findOne({
      where: { id },
      relations: ['question_results'],
    });
  }

  async findOneByUserIdAndExamId(
    user_id: string,
    exam_id: number,
  ): Promise<ExamResult> {
    return await this.examResultRepository.findOne({
      where: {
        user_id,
        exam_id,
      },
    });
  }

  async deleteExamResult(id: number): Promise<void> {
    await this.examResultRepository.delete(id);
  }
}
