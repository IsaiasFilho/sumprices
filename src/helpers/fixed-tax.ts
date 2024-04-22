/* eslint-disable prettier/prettier */
import { TaxType } from '../interfaces/tax-type.interface';

export class FixedTax extends TaxType {
  constructor(private readonly fixedAmount: number) {
    super();
  }

  calculate(value: number): number {
    return value + this.fixedAmount;
  }
}