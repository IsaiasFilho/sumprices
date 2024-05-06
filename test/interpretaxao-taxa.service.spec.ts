import { InterpretacaoTaxaService } from '../src/modules/calculo-taxa/service/interpretacao-taxa.service';

describe('Classe InterpretacaoTaxaService', () => {
  it('deve extrair a porcentagem corretamente - 1', () => {
    expect(InterpretacaoTaxaService.obterPorcentagem('TAX_10')).toEqual(10);
  });

  it('deve extrair a porcentagem corretamente - 2', () => {
    expect(InterpretacaoTaxaService.obterPorcentagem('TAX_20')).toEqual(20);
  });
});
