/* eslint-disable prettier/prettier */
import { TaxType } from '../interfaces/tax-type.interface';

export class PercentageTax extends TaxType {
  constructor(private readonly percentage: number) {
    super();
  }

  calculate(value: number): number {
    return value + (value * this.percentage / 100);
  }
}
