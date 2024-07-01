import { checkIsAlphaRepository } from "./checkIsAlphaRepository";
import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class CheckIsAlpha implements checkIsAlphaRepository
{
    public async checkIsOnlyAlpha(value: string): Promise<string>
    {
        const regex = /^[A-Za-z][A-Za-z\s]*$/;

        if(regex.test(value))
        {
            console.log("Só contém letras. Passou!");
            
            return value;
        }
        else
        {
            console.log("Contém algum número ou caractere não alfabético, ou espaço no início. Não Aprovado!");
            throw new BadRequestException("Contém caracteres invalidados e/ou numeros!");
        }
    }
}