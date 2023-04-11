import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Exam } from './exam.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
  ) {}

  async findAll(): Promise<Exam[]> {
    return await this.examRepository.find({
      relations: ['sections', 'sections.questions'],
    });
  }

  async create(): Promise<Exam> {
    const exam = new Exam();
    exam.name = 'SAT';
    return await this.examRepository.save(exam);
  }
}
