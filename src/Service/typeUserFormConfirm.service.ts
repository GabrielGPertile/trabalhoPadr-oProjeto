import { Injectable, NotFoundException } from "@nestjs/common";
import { TypeUserDTO } from "src/DTO/typeUser.dto";
import { TypeUser } from "src/model/typeUser";
import { TypeUserRepositoryImpl } from "src/Repository/typeUserRepositoryImpl";
import { CheckArrayLength } from "src/Strategy/checkArrayLength/CheckArrayLength";
import { ConvertArrayStringInInt } from "src/Strategy/convertArrayStringInInt/ConvertArrayStringInInt";
import { ConvertBodyReqInArray } from "src/Strategy/convertBodyReq/BodyReqInArray/convertBodyReqInArray";
import { ExceedsMaxSafeInteger } from "src/Strategy/exceedsMaxSafeInteger/exceedsMaxSafeInteger";
import { VereficionIsArray } from "src/Strategy/vereficIsArray/vereficionIsArray";

@Injectable()
export class TypeUserFormConfirmService
{
    constructor(
        private readonly convertBodyReqInArray: ConvertBodyReqInArray,
        private readonly vereficionIsArray: VereficionIsArray,
        private readonly checkArrayLength: CheckArrayLength,
        private readonly convertArrayStringInInt: ConvertArrayStringInInt,
        private readonly exceedsMaxSafeInteger: ExceedsMaxSafeInteger,
        private readonly typeUserRepositoryImpl: TypeUserRepositoryImpl,
    ){}

    async confirmTypeUserDeleteForm(body: any): Promise<any>
    {
        console.log('Request received');
        console.log('Original body:', body);

        let bodyArray: string[];
        let bodyCamp: number = 1;
        let queryData: string[];
        let queryName: string;
        let queryID: string;

        bodyArray = await this.convertBodyReqInArray.transformeBodyReqInArray(body);
        
        console.log("Este é o array do bodyArray!");
        console.log(bodyArray);

        bodyArray = await this.vereficionIsArray.vereficIsArray(bodyArray);

        [bodyArray, bodyCamp] = await this.checkArrayLength.checkArrayLengyh(bodyArray, bodyCamp);

        let numberAux = await this.convertArrayStringInInt.convertArrayStringInInt(bodyArray, 0);

        console.log("O valor da numberAux = " + numberAux);

        numberAux = await this.exceedsMaxSafeInteger.exceedsMaxSafeIntegerFunc(numberAux);

        let newTypeUserDTO = new TypeUserDTO();
        newTypeUserDTO.idDTO = numberAux;

        console.log("newTypeUserDTO.idDTO = " + newTypeUserDTO.idDTO);

        let newTypeUser = new TypeUser();
        newTypeUser.setId = newTypeUserDTO.idDTO;

        console.log("newTypeUser.id = " + newTypeUser.getId);

        const queryTypeUser = await this.typeUserRepositoryImpl.findOneById(+numberAux);

        if(!queryTypeUser){
            throw new NotFoundException('TypeUser not found');
        }

        console.log(JSON.stringify(queryTypeUser, null, 2));

        queryData = Object.values(queryTypeUser);

        console.log(queryData);

        queryID = queryData[0];
        queryName = queryData[1];

        console.log("queryID = " + queryID);
        console.log("queryName = " + queryName);

        return {queryID, queryName }
        
    }

    public async confirmTypeUserUpdateForm(body: any): Promise<any>
    {
        console.log('Request received');
        console.log('Original body:', body);

        let bodyArray: string[];
        let bodyCamp: number = 1;
        let queryData: string[];
        let queryName: string;
        let queryID: string;

        bodyArray = await this.convertBodyReqInArray.transformeBodyReqInArray(body);
        
        console.log("Este é o array do bodyArray!");
        console.log(bodyArray);

        bodyArray = await this.vereficionIsArray.vereficIsArray(bodyArray);

        [bodyArray, bodyCamp] = await this.checkArrayLength.checkArrayLengyh(bodyArray, bodyCamp);

        let numberAux = await this.convertArrayStringInInt.convertArrayStringInInt(bodyArray, 0);

        console.log("O valor da numberAux = " + numberAux);

        numberAux = await this.exceedsMaxSafeInteger.exceedsMaxSafeIntegerFunc(numberAux);

        let newTypeUserDTO = new TypeUserDTO();
        newTypeUserDTO.idDTO = numberAux;

        console.log("newTypeUserDTO.idDTO = " + newTypeUserDTO.idDTO);

        let newTypeUser = new TypeUser();
        newTypeUser.setId = newTypeUserDTO.idDTO;

        console.log("newTypeUser.id = " + newTypeUser.getId);

        const queryTypeUser = await this.typeUserRepositoryImpl.findOneById(+numberAux);

        if(!queryTypeUser){
            throw new NotFoundException('TypeUser not found');
        }

        console.log(JSON.stringify(queryTypeUser, null, 2));

        queryData = Object.values(queryTypeUser);

        console.log(queryData);

        queryID = queryData[0];
        queryName = queryData[1];

        console.log("queryID = " + queryID);
        console.log("queryName = " + queryName);

        return {queryID, queryName }
    }
}