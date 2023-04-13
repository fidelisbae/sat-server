import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSectionDto {
  @ApiProperty({ example: '섹션1' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly number: number;

  @ApiProperty({ example: '영어' })
  @IsString()
  @IsNotEmpty()
  readonly subject: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly exam_id: number;
}
