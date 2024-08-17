DESAFIO OBRIGATÓRIO

// Objetivo:

// ✓ Crie uma classe chamada “ProductManager”, que permitirá trabalhar com vários produtos.
// Ele deve ser capaz de adicionar, consultar, modificar e excluir um produto e gerenciá-lo
// em persistência de arquivo (com base na entrega 1)

// Aspectos a incluir:

// ✔ A classe deve possuir uma variável this.path, que será inicializada a partir do construtor e deverá receber o caminho para trabalhar quando sua instância for gerada.

// Você deve salvar os objetos no seguinte formato:

// ✓ id (deve ser incrementado automaticamente, não enviado no corpo)
// ✓ title (nome do produto)
// ✓ description (descrição do produto)
// ✓ price (preço)
// ✓ thumbnail (caminho da imagem)
// ✓ code (código identificador)
// ✓ stock (número de peças disponíveis)

// ✔ Ele deve ter um método addProduct que deve receber um objeto com o formato especificado anteriormente, atribuir a ele um id auto-incrementado e salvá-lo no array (lembre-se de sempre salvá-lo como um array no arquivo).
// ✔ Você deve ter um método getProducts, que deve ler o arquivo de produtos e retornar todos os produtos em formato de
// array.
// ✔ Deve possuir um método getProductById, que deve receber um id, e após a leitura do arquivo, deve buscar o produto com o id especificado e retorná-lo em formato de objeto.
// ✔ Deve ter um método updateProduct, que deve receber o id do produto a ser atualizado, assim como o campo a ser atualizado (pode ser o objeto inteiro, como em um BD), e deve atualizar o produto que possui esse id em o arquivo. SEU ID NÃO DEVE SER EXCLUÍDO
// ✔ Você deve ter um método deleteProduct, que deve receber um id e deve deletar o produto com esse id no arquivo.

// Formato de entrega:

// ✔ Arquivo Javascript chamado ProductManager.js

const titleStyle = "font-weight: bolder; font-size: 16px;";
console.group("%cProductManager", titleStyle);

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
        console.log(`Produto "${novoProduto.title}" adicionado`);
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

console.table(catalog.getProductById(0));
console.table(catalog.getProductById(1));
console.table(catalog.getProductById(2));

console.groupEnd();
