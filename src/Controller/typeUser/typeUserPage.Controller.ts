import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class TypeUserPageController
{
    @Get('typeUserIndex')
    @Render('typeUser/index')
    rootTypeUser()
    {
        
    }
}