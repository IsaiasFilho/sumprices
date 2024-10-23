import { Controller, Get, Param } from '@nestjs/common';
import { TaxService } from './tax.service';
import { Tax10 } from './tax10';
import { Tax20 } from './tax20';

@Controller('tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Get('tax10/:amount')
  calcTax10(@Param('amount') amount: string): number {
    return this.taxService.calc(Number(amount), new Tax10());
  }

  @Get('tax20/:amount')
  calcTax20(@Param('amount') amount: string): number {
    return this.taxService.calc(Number(amount), new Tax20());
  }
}
