// DESAFIO OBRIGATÓRIO
// Classes com ECMAScript e ECMAScript avançado

// Objetivo

// ✓ Crie uma classe “ProductManager que gerencia um conjunto de produtos”
// Aspectos a incluir
// ✓ Deve ser criado a partir de seu construtor com o elemento products, que será um array vazio.

// Cada produto que você gerencia deve ter as seguintes propriedades:

// ✓ title (nome do produto)
// ✓ description (descrição do produto) ✓ price (preço)
// ✓ thumbnail (caminho da imagem)
// ✓ code (código identificador)
// ✓ stock (número de peças disponíveis)

// Aspectos a incluir

// ✓ Deve ter um método “addProduct” que adicionará um produto ao array inicial de produtos.
// ✓ Valide que o campo "código" não se repete e que todos os campos são obrigatórios
// ✓ Ao adicioná-lo, ele deve ser criado com um id de incremento automático
// ✓ Deve ter um método "getProductById" que deve procurar na matriz o produto que corresponde ao id
// ✓ Caso nenhum id corresponda, exiba um erro “Não encontrado” no console

// Formato de entrega:

// ✔ Arquivo Javascript pronto para ser executado a partir do node.

console.group("ProductManager");

class ProductManager {
  constructor() {
    this.products = [];
    this.id = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (title && description && price && thumbnail && code && stock) {
      const findCode = code;
      const hasCode = this.products.find(({ code }) => code === findCode);
      if (!hasCode) {
        const novoProduto = {
          id: this.id++,
          title: title,
          description: description,
          price: price,
          thumbnail: thumbnail,
          code: code,
          stock: stock,
        };
        this.products.push(novoProduto);
        console.log("Produto adicionado");
      } else {
        console.error("Código já existe");
      }
    } else {
      console.error("Todos os argumentos da classe são obrigatórios");
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(findId) {
    const product = this.products.find(({ id }) => id === findId);
    if (product) {
      return product;
    } else {
      console.error("Não encontrado");
    }
  }
}

const catalog = new ProductManager();

catalog.addProduct("Banana");
catalog.addProduct("Banana", "Banana", 1.99, "./banana.jpg", "BN", 9);
catalog.addProduct("Maçã", "Maçã", 1.99, "./maca.jpg", "MC", 9);
catalog.addProduct("Maçã Verde", "Maçã Verde", 1.99, "./maca.jpg", "MC", 9);

console.log(catalog.getProducts());

console.log(catalog.getProductById(0));
console.log(catalog.getProductById(1));
console.log(catalog.getProductById(2));

console.groupEnd();
