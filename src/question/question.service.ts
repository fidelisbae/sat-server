import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(dto: CreateQuestionDto): Promise<Question> {
    return await this.questionRepository.save(dto);
  }

  async findAll(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
    });
  }

  // TODO return 형식
  async delete(id: number): Promise<{ affected?: number | undefined }> {
    return await this.questionRepository.delete(id);
  }
}
