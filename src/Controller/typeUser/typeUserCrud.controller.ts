import { Get, Controller, Post, Body, Inject, Res, Render } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'; // Importe o Prisma Client
import { Response } from 'express';
import { TypeUserCrudService } from 'src/Service/typeUserCrud.service';

const prisma = new PrismaClient();

@Controller()
export class TypeUserCrudController
{
    constructor(
        private readonly typeUserCrudService: TypeUserCrudService,
    ) {}

    @Get('listarTodos')
    async listarTodos(@Res() res: Response): Promise<any> 
    {
        const listedTypeUser = await this.typeUserCrudService.listarTodos();

        return res.redirect("/showAll")
    }

    @Post('includeTypeUser')
    async createTypeUserCrud(@Body() body: any, @Res() res: Response) {
   
    const createdUser = await this.typeUserCrudService.createTypeUserCrud(body);

    res.setHeader('Location', '/typeUserIndex');
    res.status(302).end();
  }

  @Post('deleteTypeUser')
  async deleteTypeUserCrud(@Body() body: any, @Res() res: Response)
  {
    const deleteTypeUser = await this.typeUserCrudService.deleteTypeUserCrud(body);

    res.setHeader('Location', '/typeUserIndex');
    res.status(302).end();
  }

  @Post('updateTypeUser')
  async updateTypeUserCrud(@Body() body: any, @Res() res: Response)
  {
    const updateTypeUser = await this.typeUserCrudService.updateTypeUserCrud(body)

    res.setHeader('Location', '/typeUserIndex');
    res.status(302).end();
  }
}