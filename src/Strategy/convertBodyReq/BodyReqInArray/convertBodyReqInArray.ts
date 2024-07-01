import { Injectable, BadRequestException } from "@nestjs/common";
import { ConvertBodyReqInArrayRepository } from "./ConvertBodyReqInArrayRepository";

@Injectable()
export class ConvertBodyReqInArray implements ConvertBodyReqInArrayRepository
{
    public async transformeBodyReqInArray(body: any): Promise<any[]>
    {
        if(typeof body === 'object' && !Array.isArray(body))
            {
                return Object.values(body);
            } 
            else 
            {
                throw new BadRequestException('Invalid body format')
            }
    }
}