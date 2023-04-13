import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Exam } from './exam.entity';
import { CreateExamDto } from './exam.dto';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,
  ) {}

  async create(dto: CreateExamDto): Promise<Exam> {
    return await this.examRepository.save(dto);
  }

  async findAll(): Promise<Exam[]> {
    return await this.examRepository.find();
  }

  async findOne(id: number): Promise<Exam> {
    return await this.examRepository.findOne({
      relations: [
        'sections',
        'sections.modulars',
        'sections.modulars.questions',
      ],
      where: { id },
    });
  }

  // TODO: return 형식
  async delete(id: number): Promise<{ affected?: number | undefined }> {
    return await this.examRepository.delete(id);
  }
}
