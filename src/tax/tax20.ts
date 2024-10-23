import { TaxTypeInterface } from './taxType';

export class Tax20 implements TaxTypeInterface {
  name: string = 'TAX_20+';
  value: number = 20;

  run(amount: number): number {
    return amount + this.value;
  }
}
