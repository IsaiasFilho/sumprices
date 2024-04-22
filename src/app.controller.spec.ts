/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';


describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
    appController = app.get<AppController>(AppController);
  });

  describe('sum', () => {
    it('should return the correct sum with a percentage tax', () => {
      const req = {
        query: {
          values: '100,200,300',
          taxType: 'percentual',
          amount: '10',
        },
      };
      jest
        .spyOn(appService, 'calculateSumWithTax')
        .mockImplementation(() => 660);

      expect(
        appController.sum(
          req.query.values,
          req.query.taxType,
          req.query.amount,
        ),
      ).toBe('result: 660');
    });

    it('should return the correct sum with a fixed tax', () => {
      const req = {
        query: {
          values: '50,150',
          taxType: 'fixed',
          amount: '20',
        },
      };
      jest
        .spyOn(appService, 'calculateSumWithTax')
        .mockImplementation(() => 220);

      expect(
        appController.sum(
          req.query.values,
          req.query.taxType,
          req.query.amount,
        ),
      ).toBe('result: 220');
    });
  });
});
