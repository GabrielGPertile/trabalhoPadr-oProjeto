import { Controller, Get, Render, Res } from "@nestjs/common";
import { TypeUserCrudService } from '../../Service/typeUserCrud.service';

@Controller()
export class TypeUserQueryController
{
    constructor(
        private readonly typeUserCrudService: TypeUserCrudService,
    ) {}

    @Get('showAll')
    @Render('typeUser/showALL')
    showAll()
    {
        const listedTypeUsers =  this.typeUserCrudService.listarTodos();
        return { listedTypeUsers }; // Passa os dados para o template Handlebars
    }
}