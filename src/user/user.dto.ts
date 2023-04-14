import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'student01' })
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @ApiProperty({ example: 'student01' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: '노진구' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '010-1234-5678' })
  @IsString()
  @IsOptional()
  readonly phone: string;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsNotEmpty()
  readonly is_teacher: boolean;
}
