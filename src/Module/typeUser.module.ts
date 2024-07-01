import { Module } from "@nestjs/common";
import { TypeUserController } from "src/Controller/typeUser/typeUser.controller";
import { TypeUserCampoDadosController } from "src/Controller/typeUser/typeUserCampoDados.controller";
import { TypeUserCrudController } from "src/Controller/typeUser/typeUserCrud.controller";
import { TypeUserformConfirmController } from "src/Controller/typeUser/typeUserformConfirm.controller";
import { TypeUserPageController } from "src/Controller/typeUser/typeUserPage.Controller";
import { TypeUserQueryController } from "src/Controller/typeUser/typeUserQuery.controller";
import { TypeUserRepositoryImpl } from "src/Repository/typeUserRepositoryImpl";
import { TypeUserCrudService } from "src/Service/typeUserCrud.service";
import { TypeUserFormConfirmService } from "src/Service/typeUserFormConfirm.service";
import { CheckArrayLength } from "src/Strategy/checkArrayLength/CheckArrayLength";
import { CheckIsAlpha } from "src/Strategy/checkIsAlpha/checkIsAlpha";
import { CheckStringLength } from "src/Strategy/checkStringLength/CheckStringLength";
import { ConvertArrayStringInInt } from "src/Strategy/convertArrayStringInInt/ConvertArrayStringInInt";
import { ConvertBodyReqInArray } from "src/Strategy/convertBodyReq/BodyReqInArray/convertBodyReqInArray";
import { ExceedsMaxSafeInteger } from "src/Strategy/exceedsMaxSafeInteger/exceedsMaxSafeInteger";
import { VereficionIsArray } from "src/Strategy/vereficIsArray/vereficionIsArray";

@Module(
    {
        
        controllers: [ 
            TypeUserController,
            TypeUserCrudController,
            TypeUserPageController,
            TypeUserformConfirmController,
            TypeUserCampoDadosController,
            TypeUserQueryController,
        ],

        providers: [
            TypeUserCrudService,
            TypeUserRepositoryImpl, 
            ConvertBodyReqInArray,
            VereficionIsArray,
            CheckArrayLength,
            CheckIsAlpha,
            CheckStringLength,
            TypeUserFormConfirmService,
            ConvertArrayStringInInt,
            ExceedsMaxSafeInteger,
        ],
    }
)

export class TypeUserModule
{
    
}