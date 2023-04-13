import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateModularDto {
  @ApiProperty({ example: '모듈1' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly number: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  readonly section_id: number;
}
