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

  async create(): Promise<ExamResult> {
    return await this.examResultRepository.save({});
  }
}
