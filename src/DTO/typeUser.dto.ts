import {IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength} from "class-validator";

export class TypeUserDTO 
{
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    idDTO: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    nameDTO: string;
}