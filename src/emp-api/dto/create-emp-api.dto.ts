import { IsBoolean, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpApiDto {
  @ApiProperty({
    description: 'The first name of the employee',
    minLength: 3,
  })
  @MinLength(3)
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the employee',
    minLength: 3,
  })
  @MinLength(3)
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'The years of experience the employee has',
    type: Number,
    example: 3,
  })
  @IsNumber()
  @IsPositive()
  experience: number;

  @ApiProperty({
    description: 'The technology the employee specializes in',
  })
  @IsString()
  technology: string;

  @ApiProperty({
    description: 'The designation or role of the employee',
  })
  @IsString()
  designation: string;

  @ApiProperty({
    description: 'The date when the employee joined',
    example: '12-12-2022',
  })
  joinedDate: string;

  @ApiProperty({
    description: 'Indicates if the employee is deleted or active',
    default: false,
  })
  @IsBoolean()
  isDeleted: boolean;
}
