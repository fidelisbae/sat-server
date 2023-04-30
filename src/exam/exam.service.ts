import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Exam } from './exam.entity';
import { CreateExamDto } from './exam.dto';
import { Section } from './section.entity';
import { Modular } from './modular.entity';
import { Question } from '../question/question.entity';

@Injectable()
export class ExamService {
  constructor(
    @InjectRepository(Exam)
    private readonly examRepository: Repository<Exam>,

    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,

    @InjectRepository(Modular)
    private readonly modularRepository: Repository<Modular>,

    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(dto: CreateExamDto): Promise<Exam> {
    const exam = await this.examRepository.save(dto);

    const sectionReadingAndWriting = await this.sectionRepository.save({
      name: 'Reading And Writing',
      exam_id: exam.id,
    });
    const sectionMath = await this.sectionRepository.save({
      name: 'Math',
      exam_id: exam.id,
    });

    const modularReadingAndWriting_1 = await this.modularRepository.save({
      number: 1,
      section_id: sectionReadingAndWriting.id,
    });
    const modularReadingAndWriting_2 = await this.modularRepository.save({
      number: 2,
      section_id: sectionReadingAndWriting.id,
    });
    const modularMath_1 = await this.modularRepository.save({
      number: 1,
      section_id: sectionMath.id,
    });
    const modularMath_2 = await this.modularRepository.save({
      number: 2,
      section_id: sectionMath.id,
    });

    for (let i = 1; i <= 27; i++) {
      await this.questionRepository.save({
        number: i,
        modular_id: modularReadingAndWriting_1.id,
      });
      await this.questionRepository.save({
        number: i,
        modular_id: modularReadingAndWriting_2.id,
      });
    }

    for (let i = 1; i <= 22; i++) {
      await this.questionRepository.save({
        number: i,
        modular_id: modularMath_1.id,
      });
      await this.questionRepository.save({
        number: i,
        modular_id: modularMath_2.id,
      });
    }

    return exam;
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
