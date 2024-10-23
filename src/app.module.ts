import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxController } from './tax/tax.controller';
import { TaxService } from './tax/tax.service';

@Module({
  imports: [],
  controllers: [AppController, TaxController],
  providers: [AppService, TaxService],
})
export class AppModule {}
