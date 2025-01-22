import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpApiDto } from './create-emp-api.dto';
import { IsString, MinLength } from 'class-validator';

export class UpdateEmpApiTechDto extends PartialType(CreateEmpApiDto) {

        @IsString()
        @MinLength(3)
        technology:string
        
}
