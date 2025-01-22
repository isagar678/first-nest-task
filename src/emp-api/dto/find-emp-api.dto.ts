import { IsBoolean, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

// {id:0, firstName: 'ninjaA',lastName:'last ',experience:0,technology:'node.js',designation:'trainee',joinedDate:'12-12-2022',isDeleted: false},


export class FindEmpApiDto {
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

