const fs = require('fs');

function calcularFaturamento(dados) {
  let faturamentos = dados;

  let diasComFaturamento = faturamentos.filter((item) => item.valor > 0);

  if (diasComFaturamento.length === 0) {
    return 'Não há dias com faturamento.';
  }

  let menorFaturamento = diasComFaturamento[0].valor;
  let maiorFaturamento = diasComFaturamento[0].valor;
  let somaFaturamento = 0;

  for (let i = 0; i < diasComFaturamento.length; i++) {
    let valor = diasComFaturamento[i].valor;
    if (valor < menorFaturamento) {
      menorFaturamento = valor;
    }
    if (valor > maiorFaturamento) {
      maiorFaturamento = valor;
    }
    somaFaturamento += valor;
  }

  let mediaMensal = somaFaturamento / diasComFaturamento.length;

  let diasAcimaDaMedia = diasComFaturamento.filter(
    (item) => item.valor > mediaMensal
  ).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

fs.readFile('faturamento.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  let dados = JSON.parse(data);
  let resultado = calcularFaturamento(dados);

  console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
  console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
  console.log(`Número de dias acima da média: ${resultado.diasAcimaDaMedia}`);
});
