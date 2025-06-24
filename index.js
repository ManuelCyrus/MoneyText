const unidades = [
  "zero", "um", "dois", "três", "quatro",
  "cinco", "seis", "sete", "oito", "nove",
  "dez", "onze", "doze", "treze", "quatorze",
  "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"
];

const dezenas = [
  "", "", "vinte", "trinta", "quarenta",
  "cinquenta", "sessenta", "setenta", "oitenta", "noventa"
];

const centenas = [
  "", "cem", "duzentos", "trezentos", "quatrocentos",
  "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"
];

function porExtenso(numero) {
  if (typeof numero !== 'number' || numero < 0 || numero > 999999999) {
    throw new Error("Apenas números entre 0 e 999.999.999 são suportados.");
  }

  if (numero < 20) return unidades[numero];

  if (numero < 100) {
    const dez = Math.floor(numero / 10);
    const un = numero % 10;
    return un === 0 ? dezenas[dez] : `${dezenas[dez]} e ${unidades[un]}`;
  }

  if (numero < 1000) {
    const cen = Math.floor(numero / 100);
    const resto = numero % 100;
    const prefixo = cen === 1 && resto !== 0 ? "cento" : centenas[cen];
    return resto === 0 ? prefixo : `${prefixo} e ${porExtenso(resto)}`;
  }

  if (numero < 1_000_000) {
    const mil = Math.floor(numero / 1000);
    const resto = numero % 1000;
    const milStr = mil === 1 ? "mil" : `${porExtenso(mil)} mil`;
    return resto === 0 ? milStr : `${milStr} e ${porExtenso(resto)}`;
  }

  if (numero < 1_000_000_000) {
    const milhao = Math.floor(numero / 1_000_000);
    const resto = numero % 1_000_000;
    const milhaoStr = milhao === 1 ? "um milhão" : `${porExtenso(milhao)} milhões`;
    return resto === 0 ? milhaoStr : `${milhaoStr} e ${porExtenso(resto)}`;
  }
}

module.exports = { porExtenso };
