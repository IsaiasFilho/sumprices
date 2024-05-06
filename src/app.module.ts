import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculoTaxaController } from './modules/calculo-taxa/controller/calculo-taxa.controller';
import { CalculoTaxaService } from './modules/calculo-taxa/service/calculo-taxa.service';

@Module({
  imports: [],
  controllers: [AppController, CalculoTaxaController,],
  providers: [AppService, CalculoTaxaService,],
})
export class AppModule {}
