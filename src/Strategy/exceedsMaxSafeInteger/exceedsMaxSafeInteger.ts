import { Injectable, BadRequestException } from "@nestjs/common";
import { ExceedsMaxSafeIntegerRepository } from "./ExceedsMaxSafeIntegerRepository";

@Injectable()
export class ExceedsMaxSafeInteger implements ExceedsMaxSafeIntegerRepository
{
    public async exceedsMaxSafeIntegerFunc(value: number): Promise<number>
    {
        if(value > Number.MAX_SAFE_INTEGER)
        {
            console.log("Esse numero execedeu o limite!");
            throw new BadRequestException('Execedeu o limite!');
        }
        else
        {
            console.log("Este numero pode ser utilizado!");
            
            return value;
        }
    }
}