import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { User } from './user.entity';
import { AllocateExamDto, CreateUserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.userRepository.save(dto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { id },
      relations: ['exam'],
    });
  }

  // TODO return 형식
  async delete(id: string): Promise<{ affected?: number | undefined }> {
    return await this.userRepository.delete(id);
  }

  async allocate(dto: AllocateExamDto): Promise<UpdateResult> {
    const { exam_id, user_id } = dto;
    const data = await this.userRepository.update(user_id, {
      exam_id,
    });

    return data;
  }
}
