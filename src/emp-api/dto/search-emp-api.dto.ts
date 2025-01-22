import { IsOptional, IsString } from 'class-validator';

export class SearchEmpApiDto {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  technology?: string;

  @IsOptional()
  @IsString()
  designation?: string;
}
