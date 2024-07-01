import { Injectable, BadRequestException } from "@nestjs/common";
import { vereficionIsArrayRepository } from "./vereficionIsArrayRepository";

@Injectable()
export class VereficionIsArray implements vereficionIsArrayRepository
{
    public async vereficIsArray(array: any): Promise<any[]>
    {
        // Verificar se o bodyArray é de fato um array
        if (!Array.isArray(array)) {
            throw new BadRequestException('Body is not an array');
        }
        else 
        {
            console.log("Isso é um array!")
            return array;
        }
    }
}