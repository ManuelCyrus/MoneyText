const { porExtenso } = require('../index');

test('números simples', () => {
  expect(porExtenso(0)).toBe("zero");
  expect(porExtenso(7)).toBe("sete");
  expect(porExtenso(13)).toBe("treze");
});

test('dezenas', () => {
  expect(porExtenso(20)).toBe("vinte");
  expect(porExtenso(42)).toBe("quarenta e dois");
});

test('centenas', () => {
  expect(porExtenso(100)).toBe("cem");
  expect(porExtenso(121)).toBe("cento e vinte e um");
});

test('milhares', () => {
  expect(porExtenso(1000)).toBe("mil");
  expect(porExtenso(1234)).toBe("mil e duzentos e trinta e quatro");
  expect(porExtenso(200000)).toBe("duzentos mil");
});
