import { Injectable, BadRequestException } from "@nestjs/common";
import { ConvertArrayStringInIntRepository,  } from "./ConvertArrayStringInIntRepository";

@Injectable()
export class ConvertArrayStringInInt implements ConvertArrayStringInIntRepository
{
    public async convertArrayStringInInt(array: string[], index: number): Promise<number>
    {
        if(index >= 0 && index < array.length)
        {
            console.log("Transformado com sucesso");
            console.log(`O index ${index} do seu array virou INT!`);
            return parseInt(array[index], 10);
        }
        else
        {
            console.log("Não foi possivel transformar com o indice incluido!")
            throw new BadRequestException('Não foi possivel transformar com o indice incluido!');
        }
    }
}