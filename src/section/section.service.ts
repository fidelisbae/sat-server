import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Section } from './section.entity';
import { CreateSectionDto } from './section.dto';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {}

  async create(body: CreateSectionDto): Promise<Section> {
    return await this.sectionRepository.save(body);
  }

  async findAll(): Promise<Section[]> {
    return await this.sectionRepository.find();
  }

  async findOne(id: number): Promise<Section> {
    return await this.sectionRepository.findOne({
      relations: ['modulars', 'modulars.questions'],
      where: { id },
    });
  }

  async delete(id: number): Promise<{ affected?: number | undefined }> {
    return await this.sectionRepository.delete(id);
  }
}
