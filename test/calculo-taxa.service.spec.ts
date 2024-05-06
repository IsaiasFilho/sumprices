import { CalculoTaxaService } from '../src/modules/calculo-taxa/service/calculo-taxa.service';

describe('Classe InterpretacaoTaxaService', () => {
  it('deve calcular o valor corretamente - 1', () => {
    const valor = CalculoTaxaService.calcular(
      [
        'TAX_10'
      ],
      100,
    )

    expect(valor).toEqual(110);
  });

  it('deve calcular o valor corretamente - 2', () => {
    const valor = CalculoTaxaService.calcular(
      [
        'TAX_10',
        'TAX_5'
      ],
      100,
    )

    expect(valor).toEqual(115.5);
  });
});
