/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TaxType } from './interfaces/tax-type.interface';
@Injectable()
export class AppService {
  calculateSumWithTax(values: number[], taxStrategy: TaxType): number {
    const sum = values.reduce((acc, value) => acc + value, 0);
    return taxStrategy.calculate(sum);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
