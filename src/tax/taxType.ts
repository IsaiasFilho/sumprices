export interface TaxTypeInterface {
  name: string;

  run(amount: number): number;
}
