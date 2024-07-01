import { Injectable } from "@nestjs/common";
import { ConvertBodyReqInArray } from '../Strategy/convertBodyReq/BodyReqInArray/convertBodyReqInArray';
import { VereficionIsArray } from '../Strategy/vereficIsArray/vereficionIsArray';
import { CheckArrayLength } from '../Strategy/checkArrayLength/CheckArrayLength';
import { TypeUserDTO } from "src/DTO/typeUser.dto";
import { CheckIsAlpha } from "src/Strategy/checkIsAlpha/checkIsAlpha";
import { CheckStringLength } from "src/Strategy/checkStringLength/CheckStringLength";
import { TypeUser } from "src/model/typeUser";
import { TypeUserRepositoryImpl } from "src/Repository/typeUserRepositoryImpl";
import { ConvertArrayStringInInt } from "src/Strategy/convertArrayStringInInt/ConvertArrayStringInInt";
import { ExceedsMaxSafeInteger } from "src/Strategy/exceedsMaxSafeInteger/exceedsMaxSafeInteger";

@Injectable()
export class TypeUserCrudService
{
    constructor(
      private readonly typeUserRepositoryImpl: TypeUserRepositoryImpl,
      private readonly convertBodyReqInArray: ConvertBodyReqInArray,
      private readonly vereficionIsArray: VereficionIsArray,
      private readonly checkArrayLength: CheckArrayLength,
      private readonly checkIsAlpha: CheckIsAlpha,
      private readonly checkStringLength: CheckStringLength,
      private readonly convertArrayStringInInt: ConvertArrayStringInInt,
      private readonly exceedsMaxSafeInteger: ExceedsMaxSafeInteger,
    ){}

    async createTypeUserCrud(body: any): Promise<any>
    {
        console.log('Request received');
        console.log('Original body:', body);

        let bodyArray: string[];
        let bodyCamp = 1;
        let stringMaxLenght: number = 30;

        bodyArray = await this.convertBodyReqInArray.transformeBodyReqInArray(body);

        console.log("Este é o array do bodyArray!");
        console.log(bodyArray);

        bodyArray = await this.vereficionIsArray.vereficIsArray(bodyArray);

        [bodyArray, bodyCamp] = await this.checkArrayLength.checkArrayLengyh(bodyArray, bodyCamp);

        let newTypeUserDTO = new TypeUserDTO();
        newTypeUserDTO.nameDTO = bodyArray[0];

        newTypeUserDTO.nameDTO = await this.checkIsAlpha.checkIsOnlyAlpha(newTypeUserDTO.nameDTO);
        newTypeUserDTO.nameDTO = await this.checkStringLength.checkStringLength(newTypeUserDTO.nameDTO, stringMaxLenght);

        console.log("newTypeUserDTO.name = " + newTypeUserDTO.nameDTO);

        let newTypeUser = new TypeUser();
        newTypeUser.setName = newTypeUserDTO.nameDTO;

        console.log("newTypUser.getName = " + newTypeUser.getName);

        const createdUser = await this.typeUserRepositoryImpl.createTypeUser(
            {
            name: newTypeUser.getName
            },
        );

        return createdUser;
    }

    async deleteTypeUserCrud(body: any): Promise<any>
    {
        console.log('Request received');
        console.log('Original body:', body);

        let bodyArray: string[];
        let bodyCamp = 2;

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

        const deletedTypeUser = await this.typeUserRepositoryImpl.delete(+newTypeUser.getId);
    }

    public async updateTypeUserCrud(body: any): Promise<any>
    {
        console.log('Request received');
        console.log('Original body:', body);

        let bodyArray: string[];
        let bodyCamp = 2;

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
        newTypeUserDTO.nameDTO = bodyArray[1];

        console.log("newTypeUserDTO.idDTO = " + newTypeUserDTO.idDTO);
        console.log("newTypeUserDTO.nameDTO = " + newTypeUserDTO.nameDTO);

        let newTypeUser = new TypeUser();
        newTypeUser.setId = newTypeUserDTO.idDTO;
        newTypeUser.setName = newTypeUserDTO.nameDTO;

        console.log("newTypeUser.id = " + newTypeUser.getId);
        console.log("newTypeUser.name = " + newTypeUser.getName);

        const updatedTypeUser = await this.typeUserRepositoryImpl.update(+newTypeUser.getId, { name: newTypeUser.getName });
    }

    public async listarTodos(): Promise<any>
    {
        const listedTypeUsers = await this.typeUserRepositoryImpl.findAll();
        
        console.log(listedTypeUsers);

        return listedTypeUsers;
    }
    
}