import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Modular } from './modular.entity';
import { Repository } from 'typeorm';
import { CreateModularDto } from './modular.dto';

@Injectable()
export class ModularService {
  constructor(
    @InjectRepository(Modular)
    private readonly modularRepository: Repository<Modular>,
  ) {}

  async create(dto: CreateModularDto): Promise<Modular> {
    return await this.modularRepository.save(dto);
  }

  async findAll(): Promise<Modular[]> {
    return await this.modularRepository.find();
  }

  async findOne(id: number): Promise<Modular> {
    return await this.modularRepository.findOne({
      relations: ['questions'],
      where: { id },
    });
  }

  // TODO return 형식
  async delete(id: number): Promise<{ affected?: number | undefined }> {
    return await this.modularRepository.delete(id);
  }
}
