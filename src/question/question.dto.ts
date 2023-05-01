import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @ApiProperty({ example: '문제 본문 this is...' })
  @IsString()
  @IsNotEmpty()
  @Allow()
  readonly passage: string | null;

  @ApiProperty({ example: 'what is this answer?' })
  @IsString()
  @IsNotEmpty()
  @Allow()
  readonly content: string | null;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsOptional()
  @Allow()
  readonly choice_A: string | null;

  @ApiProperty({ example: 'B' })
  @IsString()
  @IsOptional()
  @Allow()
  readonly choice_B: string | null;

  @ApiProperty({ example: 'C' })
  @IsString()
  @IsOptional()
  @Allow()
  readonly choice_C: string | null;

  @ApiProperty({ example: 'D' })
  @IsString()
  @IsOptional()
  @Allow()
  readonly choice_D: string | null;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsNotEmpty()
  readonly correct_answer: string;
}
