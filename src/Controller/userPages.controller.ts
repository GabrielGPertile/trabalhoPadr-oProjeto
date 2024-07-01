import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class UserPageController
{
    @Get('userIndex')
    @Render('usuario/index')
    rootUser() 
    {
        return { message: 'Seja bem vindo usuario!'}
    }
}