// Dados os objetos indicados, faça uma nova lista (array) contendo todos os tipos de produtos (não quantidades),
// Posteriormente, obtenha o total de produtos vendidos para todos os objetos (use Object.values)

// DADOS

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

// SEM UTILIZAR REDUCE

const tiposProdutosSet = new Set(); // O objeto Set permite que você armazene valores únicos de qualquer tipo
const totalProdutos = {};

objetos.forEach((obj) => {
  Object.keys(obj).forEach((item) => {
    tiposProdutosSet.add(item);
    totalProdutos[item] = (totalProdutos[item] || 0) + obj[item];
  });
});

const tiposProdutos = Array.from(tiposProdutosSet); // O método Array.from() cria uma nova instância de um Array

console.table(totalProdutos);

// UTILIZANDO REDUCE

// const totalProdutos = objetos.reduce((acumulador, obj) => {
//   Object.entries(obj).forEach(([item, quantidade]) => {
//     acumulador.tipos.add(item);
//     acumulador.total[item] = (acumulador.total[item] || 0) + quantidade;
//   });
//   return acumulador;
// }, { tipos: new Set(), total: {} });

// const tiposProdutos = [...totalProdutos.tipos];

// console.log('Tipos de Produtos:', tiposProdutos);
// console.table(totalProdutos.total);
