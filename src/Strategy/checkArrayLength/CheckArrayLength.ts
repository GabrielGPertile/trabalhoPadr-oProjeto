import { Injectable, BadRequestException } from "@nestjs/common";
import { CheckArrayLengthRepository } from "./CheckArrayLengthRepository";

@Injectable()
export class CheckArrayLength implements CheckArrayLengthRepository
{
    public async checkArrayLengyh(array: any, minNumber: number): Promise<[any[], number]> 
    {
        if (array.length > minNumber || array.length < minNumber) 
        {
            console.log("Este array tem mais dados que campos do formulario")
            throw new BadRequestException('Invalid body, not enough elements');
        }
        else 
        {
            console.log("Este array tem o tamanho correto do corpo da requisição");
            return [array, array.length];
        }
    }
}