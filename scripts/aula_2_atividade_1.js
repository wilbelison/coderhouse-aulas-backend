// ATIVIDADE EM SALA
// Para praticar
// Utilização ES6-ES9
// Descrição da atividade: Dados os objetos indicados no próximo slide, faça uma nova lista (array) contendo todos os tipos de produtos (não quantidades), dica: use Object.keys e Array.includes. Mostrar array por console. Posteriormente, obtenha o total de produtos vendidos para todos os objetos (use Object.values)
// Duração: 15 minutos

console.group("Utilização ES6-ES9");

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

/* SOLUÇÃO SEM UTILIZAR REDUCE */

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

/* SOLUÇÃO UTILIZANDO REDUCE */

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

console.groupEnd();
