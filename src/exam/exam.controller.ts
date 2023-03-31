import { Controller, Post } from '@nestjs/common';
import { ExamService } from './exam.service';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  async createExam() {
    try {
    } catch (error) {
      return error;
    }
  }
}
