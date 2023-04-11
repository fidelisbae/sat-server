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

  async findAll(): Promise<Exam[]> {
    return await this.examRepository.find({
      relations: ['sections'],
    });
  }

  async findOne(id: number): Promise<Exam> {
    return await this.examRepository.findOne({
      where: { id },
    });
  }

  async create(body: CreateExamDto): Promise<Exam> {
    return await this.examRepository.save(body);
  }

  async delete(id: number): Promise<{ affected?: number | undefined }> {
    return await this.examRepository.delete(id);
  }
}
