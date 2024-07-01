import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class TypeUserController 
{
    @Get('formulario-incluir-typeUser')
    @Render('typeUser/forms/addTypeUser')
    formIncludeTypeUser()
    {

    }

    @Get('formulario-excluir-typeUser')
    @Render('typeUser/forms/deleteTypeUser')
    formDeleteTypeUser()
    {
        
    }

    @Get('formulario-update-typeUser')
    @Render('typeUser/forms/updateTypeUser')
    formUpdateTypeUser()
    {

    }
}