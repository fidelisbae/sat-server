import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExamDto {
  @ApiProperty({ example: '테스트' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
