// DESAFIO OBRIGATÓRIO
// Gestão de arquivos em Javascript

// Vamos lembrar...

// Com base no desafio da aula 2:
// ✓ Estruturamos nossa primeira classe
// ✓ Adicionamos os métodos necessários à nossa classe para trabalhar com uma matriz de produtos
// Agora, adicionamos fileSystem para alterar o modelo de persistência atual.

// Você deve salvar os objetos no seguinte formato:

// ✓ id (deve ser incrementado automaticamente, não enviado no corpo)
// ✓ title (nome do produto)
// ✓ description (descrição do produto)
// ✓ price (preço)
// ✓ thumbnail (caminho da imagem)
// ✓ code (código identificador)
// ✓ stock (número de peças disponíveis)

// Objetivo:

// ✓ Crie uma classe chamada “ProductManager”, que permitirá trabalhar com vários produtos. Ele deve ser capaz de adicionar, consultar, modificar e excluir um produto e gerenciá-lo em persistência de arquivo (com base na entrega 1)

// Aspectos a incluir:

// ✔ A classe deve possuir uma variável this.path, que será inicializada a partir do construtor e deverá receber o caminho para trabalhar quando sua instância for gerada.
// ✔ Ele deve ter um método addProduct que deve receber um objeto com o formato especificado anteriormente, atribuir a ele um id auto-incrementado e salvá-lo no array (lembre-se de sempre salvá-lo como um array no arquivo).
// ✔ Você deve ter um método getProducts, que deve ler o arquivo de produtos e retornar todos os produtos em formato de array.
// ✔ Deve possuir um método getProductById, que deve receber um id, e após a leitura do arquivo, deve buscar o produto com o id especificado e retorná-lo em formato de objeto.
// ✔ Deve ter um método updateProduct, que deve receber o id do produto a ser atualizado, assim como o campo a ser atualizado (pode ser o objeto inteiro, como em um BD), e deve atualizar o produto que possui esse id em o arquivo. SEU ID NÃO DEVE SER EXCLUÍDO
// ✔ Você deve ter um método deleteProduct, que deve receber um id e deve deletar o produto com esse id no arquivo.

// Formato de entrega:

// ✔ Arquivo Javascript chamado ProductManager.js

const titleStyle = "font-weight: bolder; font-size: 16px;";
console.group("%cProductManager", titleStyle);

const fs = require("fs");
class ProductManager {
  constructor(jsonPath) {
    this.jsonPath = jsonPath;
    this.products = this.loadProducts();
    this.id = this.products.length
      ? this.products[this.products.length - 1].id + 1
      : 1;
  }

  loadProducts() {
    try {
      return JSON.parse(fs.readFileSync(this.jsonPath, "utf-8"));
    } catch {
      return [];
    }
  }

  saveProducts() {
    fs.writeFileSync(this.jsonPath, JSON.stringify(this.products, null, 2));
  }

  addProduct(product) {
    const { title, description, price, thumbnail, code, stock } = product;
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.error(
        "Oops! Você esqueceu algum ingrediente essencial do produto."
      );
      return;
    }
    if (this.products.some((p) => p.code === code)) {
      console.error(
        "Erro 404: Código de produto duplicado! Tente outra combinação secreta."
      );
      return;
    }
    this.products.push({
      id: this.id++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });
    this.saveProducts();
    console.log(
      `🎉 Uhul! Produto "${title}" adicionado com sucesso! Que tal adicionar outro?`
    );
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product)
      console.error(
        "A busca pelo produto falhou! Ele deve estar escondido em algum lugar."
      );
    return product;
  }

  updateProduct(id, updatedFields) {
    const product = this.getProductById(id);
    if (product) {
      Object.assign(product, updatedFields);
      this.saveProducts();
      console.log(
        `✨ O produto "${product.title}" passou por uma reforma e está atualizado!`
      );
    }
  }

  deleteProduct(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.saveProducts();
      console.log(
        "🚮 Produto deletado com sucesso. Adeus, amigo... Foi bom enquanto durou!"
      );
    } else {
      console.error(
        "Erro 404: Produto não encontrado. Será que ele foi abduzido?"
      );
    }
  }
}

const catalog = new ProductManager("./aula_4_desafio.json");

catalog.addProduct({
  title: "Refrigerante Alienígena",
  description:
    "Um refresco importado diretamente da Galáxia de Andrômeda. Sabor extraterrestre com bolhas que flutuam!",
  price: 19.99,
  thumbnail: "./products/alien_soda.jpg",
  code: "ALIEN_SODA",
  stock: 33,
});

console.table(catalog.getProducts());

catalog.updateProduct(3, { price: 16.99 });
console.table(catalog.getProductById(4));

catalog.deleteProduct(3);

console.groupEnd();
