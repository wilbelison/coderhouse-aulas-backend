// ATIVIDADE EM SALA
// Para praticar
// Utilização ES6-ES9
// Descrição da atividade: Dados os objetos indicados no próximo slide, faça uma nova lista (array) contendo todos os tipos de produtos (não quantidades), dica: use Object.keys e Array.includes. Mostrar array por console. Posteriormente, obtenha o total de produtos vendidos para todos os objetos (use Object.values)
// Duração: 15 minutos

const titleStyle = "font-weight: bolder; font-size: 16px;";
console.group("%cUtilização ES6-ES9", titleStyle);

const objetos = [
  {
    "🍎 maçãs": 3,
    "🍐 peras": 2,
    "🥩 carnes": 1,
    "🍗 frangos": 5,
    "🍭 doces": 2,
  },
  {
    "🍎 maçãs": 1,
    "☕️ cafés": 1,
    "🥚 ovos": 6,
    "🍗 frangos": 1,
    "🍞 pães": 4,
  },
];

/* sol */

const tiposProdutosSet = new Set(); // O objeto Set permite que você armazene valores únicos de qualquer tipo
const totalPorProduto = {};
let totalDeProdutos = 0;

objetos.forEach((obj) => {
  Object.keys(obj).forEach((item) => {
    tiposProdutosSet.add(item);
    totalPorProduto[item] = (totalPorProduto[item] || 0) + obj[item];
    totalDeProdutos += obj[item];
  });
});

totalPorProduto["TOTAL DE PRODUTOS"] = totalDeProdutos;

const tiposProdutos = Array.from(tiposProdutosSet); // O método Array.from() cria uma nova instância de um Array

console.table(totalPorProduto);

/* SOLUÇÃO UTILIZANDO REDUCE */

// const totalPorProduto = objetos.reduce((acumulador, obj) => {
//   Object.entries(obj).forEach(([item, quantidade]) => {
//     acumulador.tipos.add(item);
//     acumulador.total[item] = (acumulador.total[item] || 0) + quantidade;
//   });
//   return acumulador;
// }, { tipos: new Set(), total: {} });

// const tiposProdutos = [...totalPorProduto.tipos];

// console.log('Tipos de Produtos:', tiposProdutos);
// console.table(totalDeProdutos.total);

console.groupEnd();
