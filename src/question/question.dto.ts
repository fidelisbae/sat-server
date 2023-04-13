import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly number: number;

  @ApiProperty({ example: '문제 본문 this is...' })
  @IsString()
  @IsNotEmpty()
  readonly passage: string;

  @ApiProperty({ example: 'what is this answer?' })
  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @ApiProperty({ example: '/files/image/1/image.png' })
  @IsString()
  @IsOptional()
  readonly image_path: string;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsOptional()
  readonly choice_1: string;

  @ApiProperty({ example: 'B' })
  @IsString()
  @IsOptional()
  readonly choice_2: string;

  @ApiProperty({ example: 'C' })
  @IsString()
  @IsOptional()
  readonly choice_3: string;

  @ApiProperty({ example: 'D' })
  @IsString()
  @IsOptional()
  readonly choice_4: string;

  @ApiProperty({ example: 'E' })
  @IsString()
  @IsOptional()
  readonly choice_5: string;

  @ApiProperty({ example: 'A' })
  @IsString()
  @IsNotEmpty()
  readonly correct_answer: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly modular_id: number;
}
