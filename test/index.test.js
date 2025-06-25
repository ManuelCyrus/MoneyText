const { porExtenso } = require('../index');

test('números simples', () => {
  expect(porExtenso(0)).toBe("zero");
  expect(porExtenso(7)).toBe("sete");
  expect(porExtenso(13)).toBe("treze");
});

test('dezenas', () => {
  expect(porExtenso(20)).toBe("vinte");
  expect(porExtenso(30)).toBe("30");
  expect(porExtenso(42)).toBe("quarenta e dois");
});

test('centenas', () => {
  expect(porExtenso(100)).toBe("cem");
  expect(porExtenso(121)).toBe("cento e vinte e um");
});


test('milhões', () => {
  expect(porExtenso(1000000)).toBe("um milhão");
  expect(porExtenso(2000000)).toBe("dois milhões");
  expect(porExtenso(123456789)).toBe("cento e vinte e três milhões e quatrocentos e cinquenta e seis mil e setecentos e oitenta e nove");
});
