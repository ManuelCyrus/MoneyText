
const { porExtenso } = require('./index');

const valor = parseInt(process.argv[2]);

if (isNaN(valor)) {
  console.log(" Use um número válido. Exemplo:");
  console.log("   node run.js 1234");
  process.exit(1);
}

try {
  const texto = porExtenso(valor);
  console.log(`→ ${valor} = "${texto}"`);
} catch (err) {
  console.error("Erro:", err.message);
}
