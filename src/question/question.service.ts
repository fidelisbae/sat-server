import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { Repository } from 'typeorm';
import { UpdateQuestionDto } from './question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async update(id: number, dto: UpdateQuestionDto) {
    return await this.questionRepository.update(id, dto);
  }

  async findAll(): Promise<Question[]> {
    return await this.questionRepository.find();
  }

  async findOne(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
    });
  }

  async findQuestionId(
    exam_id: number,
    section: string,
    module: number,
    number: number,
  ): Promise<Question> {
    return await this.questionRepository.findOne({
      where: {
        number: number,
        module: module,
        section: section,
        exam_id: exam_id,
      },
    });
  }
}
