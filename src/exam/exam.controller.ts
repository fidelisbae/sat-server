import { Controller, Get } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Get()
  async findAll() {
    try {
      return await this.examService.findAll();
    } catch (error) {
      return error;
    }
  }
}
