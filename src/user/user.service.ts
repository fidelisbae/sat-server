import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { AllocateExamDto, CreateUserDto } from './user.dto';
import { ExamService } from '../exam/exam.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly examService: ExamService,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(dto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['exams'],
    });
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['exams'],
    });
  }

  // TODO return 형식
  async delete(id: string): Promise<{ affected?: number | undefined }> {
    return await this.userRepository.delete(id);
  }

  async allocate(dto: AllocateExamDto): Promise<User> {
    const { exam_id, user_id } = dto;

    const user = await this.findOne(user_id);
    const exam = await this.examService.findOne(exam_id);

    if (!user) {
      throw new Error('User not found');
    }

    if (!exam) {
      throw new Error('Exam not found');
    }

    user.exams.push(exam);

    return await this.userRepository.save(user);
  }
}
