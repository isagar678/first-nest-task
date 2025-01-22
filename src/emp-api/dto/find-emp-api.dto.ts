import { IsBoolean, IsNumber, IsPositive, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindEmpApiDto {
  @ApiProperty({
    description: 'The first name of the employee (optional for search)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the employee (optional for search)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'The years of experience the employee has (optional for search)',
    type: Number,
    example: 3,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  experience: number;

  @ApiProperty({
    description: 'The technology the employee specializes in (optional for search)',
    required: false,
  })
  @IsOptional()
  @IsString()
  technology: string;

  @ApiProperty({
    description: 'The designation or role of the employee (optional for search)',
    required: false,
  })
  @IsOptional()
  @IsString()
  designation: string;

  @ApiProperty({
    description: 'The date when the employee joined (optional for search)',
    example: '12-12-2022',
    required: false,
  })
  @IsOptional()
  joinedDate: string;

  @ApiProperty({
    description: 'Indicates if the employee is deleted or active (optional for search)',
    default: false,
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  isDeleted: boolean;
}
