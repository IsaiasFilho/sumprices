import { InterpretacaoTaxaService } from "./interpretacao-taxa.service";

export class CalculoTaxaService {
  static calcular(taxas: Array<string>, valor: number) {
    let total = valor;
    const quantidadeDeTaxas = taxas.length;

    for (let i = 0; i < quantidadeDeTaxas; ++i) {
      const taxa = taxas[i];
      const taxaNumerica = InterpretacaoTaxaService.obterPorcentagem(taxa);

      if (taxaNumerica > 0) {
        total = total + total * taxaNumerica / 100
      }
    }

    return total;
  }
};

