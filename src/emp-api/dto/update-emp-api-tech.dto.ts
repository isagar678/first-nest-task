import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpApiDto } from './create-emp-api.dto';
import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmpApiTechDto extends PartialType(CreateEmpApiDto) {
  @ApiProperty({
    description: 'The technology the employee is associated with (mandatory for update)',
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  technology: string;
}
