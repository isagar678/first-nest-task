import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpApiDto } from './create-emp-api.dto';
import { IsBoolean, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class UpdateEmpApiDto extends PartialType(CreateEmpApiDto) {
    @MinLength(3)
        @IsString()
        firstName:string
    
        @MinLength(3)
        @IsString()
        lastName:string
    
        @IsNumber()
        @IsPositive()
        experience:number
    
        @IsString()
        technology:string
        designation:string
        joinedDate:string
    
        @IsBoolean()
        isDeleted:boolean
}
