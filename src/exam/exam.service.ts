import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Exam } from './exam.entity';
import { CreateExamDto } from './exam.dto';
import { Question } from '../question/question.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,

    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  // @Todo: transaction
  async create(dto: CreateExamDto): Promise<Exam> {
    const exam = await this.examRepository.save(dto);

    for (let i = 1; i <= 27; i++) {
      await this.questionRepository.save({
        exam_id: exam.id,
        number: i,
        section: 'Reading And Writing',
        module: 1,
        passage: '',
      });
    }

    for (let i = 1; i <= 27; i++) {
      await this.questionRepository.save({
        exam_id: exam.id,
        number: i,
        section: 'Reading And Writing',
        module: 2,
        passage: '',
      });
    }

    for (let i = 1; i <= 22; i++) {
      await this.questionRepository.save({
        exam_id: exam.id,
        number: i,
        section: 'Math',
        module: 1,
        passage: '',
      });
    }

    for (let i = 1; i <= 22; i++) {
      await this.questionRepository.save({
        exam_id: exam.id,
        number: i,
        section: 'Math',
        module: 2,
        passage: '',
      });
    }

    return exam;
  }

  async findAll(): Promise<Exam[]> {
    return await this.examRepository.find();
  }

  async findOne(id: number): Promise<Exam> {
    return await this.examRepository.findOne({
      relations: ['questions'],
      where: { id },
    });
  }

  // TODO: return 형식
  async delete(id: number): Promise<{ affected?: number | undefined }> {
    return await this.examRepository.delete(id);
  }
}
