import { IsOptional, IsString, MinLength } from 'class-validator';

export class SearchEmpApiDto {
  @IsOptional()
  @MinLength(3)
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  lastName: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  technology: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  designation: string;
}
