import { TaxService } from './tax.service';
import { Tax10 } from './tax10';
import { Tax20 } from './tax20';

describe('TAX', () => {
  describe('calc', () => {
    it('Tax10', () => {
      const taxService = new TaxService();

      const tax10 = new Tax10();

      const result = taxService.calc(100, tax10);

      expect(result).toBe(110);
    });
  });

  it('Tax20', () => {
    const taxService = new TaxService();

    const tax20 = new Tax20();

    const result = taxService.calc(500, tax20);

    expect(result).toBe(520);
  });
});
