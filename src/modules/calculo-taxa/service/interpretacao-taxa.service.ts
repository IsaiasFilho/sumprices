export class InterpretacaoTaxaService {
  static obterPorcentagem(taxa: string): number {
    const matches = taxa.match(/\d+/);

    if (matches) {
      return parseInt(matches[0]);
    }

    return 0;
  }
};
