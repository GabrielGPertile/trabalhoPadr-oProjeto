import { Injectable, BadRequestException } from "@nestjs/common";

@Injectable()
export class CheckStringLength {
    public async checkStringLength(value: string, maxLength: number): Promise<string> 
    {
        
        if (value.length > maxLength) 
        {
            console.log("Contém mais caracteres do que deveria ter!");
            throw new BadRequestException('Invalid body, not enough elements');
        }
        else 
        {
            console.log("Contém o número correto de caracteres!");
            return value;
        }
    }
}