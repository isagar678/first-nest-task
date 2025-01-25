import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpApiDto } from './create-emp-api.dto';
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmpApiDto extends PartialType(CreateEmpApiDto) {
  @ApiProperty({
    description: 'The first name of the employee (optional for update)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the employee (optional for update)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Experience in years of the employee (optional for update)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  experience: number;

  @ApiProperty({
    description: 'The technology the employee specializes in (optional for update)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  technology: string;

  @ApiProperty({
    description: 'The designation of the employee (mandatory for update)',
    required: false,
  })
  @IsString()
  designation: string;

  @ApiProperty({
    description: 'The joining date of the employee (mandatory for update)',
    required: false,
  })
  @IsString()
  joinedDate: string;

  @ApiProperty({
    description: 'Whether the employee is deleted or not (optional for update)',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isDeleted: boolean;
}
