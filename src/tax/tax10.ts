import { TaxTypeInterface } from './taxType';

export class Tax10 implements TaxTypeInterface {
  name: string = 'TAX_10%';
  percentil: number = 10;

  run(amount: number): number {
    let percent = this.percentil / 100;
    percent += 1;
    const calc = amount * percent;

    return Math.round(calc);
  }
}
