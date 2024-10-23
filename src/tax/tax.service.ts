import { Injectable } from '@nestjs/common';
import { TaxTypeInterface } from './taxType';

@Injectable()
export class TaxService {
  calc(amount: number, taxType: TaxTypeInterface): number {
    return taxType.run(amount);
  }
}
