import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpApiDto } from './create-emp-api.dto';
import { IsBoolean, IsNumber, IsOptional, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateEmpApiDto extends PartialType(CreateEmpApiDto) {
        @IsOptional()
        @MinLength(3)
        @IsString()
        firstName:string

        @IsOptional()
        @MinLength(3)
        @IsString()
        lastName:string

        @IsOptional()
        @IsNumber()
        @IsPositive()
        experience:number

        @IsOptional()
        @MinLength(3)
        @IsString()
        technology:string
        designation:string
        joinedDate:string
    
        @IsBoolean()
        @IsOptional()
        isDeleted:boolean
}
