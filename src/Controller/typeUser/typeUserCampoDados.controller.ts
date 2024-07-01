import { Controller, Get, Query, Render } from "@nestjs/common";

@Controller()
export class TypeUserCampoDadosController
{
    @Get('campoDadosDelete')
    @Render('typeUser/forms/queryDataDelete')
    formQueryDataDelete(@Query('name') queryName: string, @Query('id') queryID: string)
    {
        return {queryID, queryName }
    }

    @Get('campoDadosUpdate')
    @Render('typeUser/forms/queryDataUpdate')
    formQueryDataUpdate(@Query('name') queryName: string, @Query('id') queryID: string)
    {
        return {queryID, queryName }
    }

}
