/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { TaxType } from './interfaces/tax-type.interface';

class MockTaxType implements TaxType {
  calculate(value: number): number {

    return value;
  }
}
describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate sum with tax correctly', () => {
    const values = [10, 20, 30]; 
    const mockTaxType = new MockTaxType();
    const result = service.calculateSumWithTax(values, mockTaxType);
    expect(result).toEqual(60);
  });
});