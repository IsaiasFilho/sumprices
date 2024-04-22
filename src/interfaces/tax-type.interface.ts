/* eslint-disable prettier/prettier */
export abstract class TaxType {
  abstract calculate(value: number): number;
}
