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
  if (typeof numero !== 'number' || numero < 0 || numero > 999999) {
    throw new Error("Apenas números entre 0 e 999999 são suportados.");
  }

  if (numero < 20) return unidades[numero];
  if (numero < 100) {
    let dez = Math.floor(numero / 10);
    let un = numero % 10;
    return un === 0 ? dezenas[dez] : `${dezenas[dez]} e ${unidades[un]}`;
  }

  if (numero < 1000) {
    let cen = Math.floor(numero / 100);
    let resto = numero % 100;
    let prefixo = cen === 1 && resto !== 0 ? "cento" : centenas[cen];
    return resto === 0 ? prefixo : `${prefixo} e ${porExtenso(resto)}`;
  }

  if (numero < 1000000) {
    let mil = Math.floor(numero / 1000);
    let resto = numero % 1000;
    let milStr = mil === 1 ? "mil" : `${porExtenso(mil)} mil`;
    return resto === 0 ? milStr : `${milStr} e ${porExtenso(resto)}`;
  }
}

module.exports = { porExtenso };
