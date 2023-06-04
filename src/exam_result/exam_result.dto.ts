import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateExamResultDto {
  @ApiProperty({ description: '제출할 시험의 id' })
  @IsNumber()
  @IsNotEmpty()
  readonly exam_id: number;

  @ApiProperty({ description: '문제의 정답을 배열형태로 98개 입력' })
  @IsArray()
  readonly answers: (string | null)[];
}
