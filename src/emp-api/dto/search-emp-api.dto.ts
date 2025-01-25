import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchEmpApiDto {
  @ApiProperty({
    description: 'The first name of the employee to search for (optional)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the employee to search for (optional)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'The technology the employee specializes in (optional)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  technology: string;

  @ApiProperty({
    description: 'The designation or role of the employee (optional)',
    minLength: 3,
    required: false,
  })
  @IsOptional()
  @MinLength(3)
  @IsString()
  designation: string;
}
