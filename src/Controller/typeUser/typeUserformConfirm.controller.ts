import { Body, Controller, Post, Res,NotFoundException } from "@nestjs/common";
import { Response } from 'express';
import { TypeUserFormConfirmService } from "src/Service/typeUserFormConfirm.service";

@Controller()
export class TypeUserformConfirmController
{
    constructor(
      private readonly typeUserFormConfirmService: TypeUserFormConfirmService,
    ){}

    @Post('confirmDeleteTypeUser')
    async confirmTypeUserDeleteForm(@Body() body: any, @Res() res: Response) 
    {
        try {
            const { queryName, queryID } = await this.typeUserFormConfirmService.confirmTypeUserDeleteForm(body);

            // Redireciona para outra rota com o parâmetro `name`
            return res.redirect(`/campoDadosDelete?name=${queryName}&id=${queryID}`);
        } catch (error) {
            if (error instanceof NotFoundException) {
                // Trate o erro de TypeUser não encontrado aqui, se necessário
                // Por exemplo, redirecionando para uma página de erro 404
                return res.status(404).send('TypeUser not found');
            } else {
                // Outros erros podem ser tratados aqui
                return res.status(500).send('Internal Server Error');
            }
          }
        }

    @Post('confirmUpdateTypeUser')
    async confirmTypeUserUpdateForm(@Body() body: any, @Res() res: Response)
    {
        try {
            const { queryName, queryID } = await this.typeUserFormConfirmService.confirmTypeUserUpdateForm(body);
            
            return res.redirect(`/campoDadosUpdate?name=${queryName}&id=${queryID}`);
        } catch (error) {
            if (error instanceof NotFoundException) {
                // Trate o erro de TypeUser não encontrado aqui, se necessário
                // Por exemplo, redirecionando para uma página de erro 404
                return res.status(404).send('TypeUser not found');
            } else {
                // Outros erros podem ser tratados aqui
                return res.status(500).send('Internal Server Error');
            }
          }
        }
    }
