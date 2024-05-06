import { Body, Controller, Header, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CalculoTaxaService } from '../service/calculo-taxa.service';

@Controller('taxa')
export class CalculoTaxaController {
  @Post('calcular')
  @Header('content-type', 'application/json')
  calcular(@Body() body: any, @Res() response: Response) {
    const valor = CalculoTaxaService.calcular(
      body['taxas'],
      parseFloat(body['valor'])
    );

    console.log(
      valor
    );

    response.json({valor});
  }
};
