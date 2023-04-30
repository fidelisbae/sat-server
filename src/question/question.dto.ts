import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateQuestionDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly number: number;

  @ApiProperty({ example: 'Reading And Writing' })
  @IsString()
  @IsIn(['Reading And Writing', 'Math'])
  @IsNotEmpty()
  readonly section: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsIn([1, 2])
  @IsNotEmpty()
  readonly module: number;

  @ApiProperty({ example: '문제 본문 this is...' })
  @IsString()
  @IsNotEmpty()
  readonly passage: string;

  @ApiProperty({ example: 'what is this answer?' })
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsOptional()
  readonly choice_A: string;

  @ApiProperty({ example: 'B' })
  @IsString()
  @IsOptional()
  readonly choice_B: string;

  @ApiProperty({ example: 'C' })
  @IsString()
  @IsOptional()
  readonly choice_C: string;

  @ApiProperty({ example: 'D' })
  @IsString()
  @IsOptional()
  readonly choice_D: string;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsNotEmpty()
  readonly correct_answer: string;
}
