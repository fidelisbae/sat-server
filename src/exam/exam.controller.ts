import { Controller, Get, Post } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @ApiOperation({
    summary: 'Get all exams',
  })
  @ApiTags('exam')
  @Get()
  async findAll() {
    try {
      return await this.examService.findAll();
    } catch (error) {
      return error;
    }
  }

  @ApiOperation({
    summary: 'Create an exam',
  })
  @ApiTags('exam')
  @Post()
  async create() {
    try {
      return await this.examService.create();
    } catch (error) {
      return error;
    }
  }
}
