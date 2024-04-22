/* eslint-disable prettier/prettier */
import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';

import { AppService } from './app.service';
import { PercentageTax } from './helpers/percentage-tax';
import { FixedTax } from './helpers/fixed-tax';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('sum')
  sum(@Query('values') values: string, @Query('taxType') taxType: string, @Query('amount') amount: string): string {
    try {
      const numericValues = values.split(',').map(Number);
      let taxStrategy;
      if (taxType === 'percentual') {
        taxStrategy = new PercentageTax(parseFloat(amount));
      } else if (taxType === 'fixed') {
        taxStrategy = new FixedTax(parseFloat(amount));
      }
      const result = this.appService.calculateSumWithTax(numericValues, taxStrategy);
      return `result: ${result}`;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }
}