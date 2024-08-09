/* Descrição da atividade: Dados os objetos indicados no próximo slide, faça uma
nova lista (array) contendo todos os tipos de produtos (não quantidades), dica:
use Object.keys e Array.includes. Mostrar array por console. Posteriormente,
obtenha o total de produtos vendidos para todos os objetos (use Object.values) */

const objetos = [
  {
    macas: 3,
    peras: 2,
    carne: 1,
    frango: 5,
    doces: 2,
  },
  {
    macas: 1,
    cafes: 1,
    ovos: 6,
    frango: 1,
    paes: 4,
  },
];

console.log(objetos);

let tiposProdutos = [];
let totalProdutos = {};

for (obj of objetos) {
  for (item in obj) {
    if (!tiposProdutos.includes(item)) {
      tiposProdutos.push(item);
    }
    if (!totalProdutos[item]) {
      totalProdutos[item] = obj[item];
    } else {
      totalProdutos[item] += obj[item];
    }
  }
}

console.log(tiposProdutos);
console.log(totalProdutos);
