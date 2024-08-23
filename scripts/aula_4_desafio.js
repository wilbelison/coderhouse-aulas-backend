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

const fs = require("fs");

const titleStyle = "font-weight: bolder; font-size: 16px;";
console.group("%cProductManager", titleStyle);

class ProductManager {
  constructor(jsonPath) {
    this.jsonPath = jsonPath;
    this.products = [];
    this.id = 0;
  }

  async saveJson(content) {
    fs.appendFile(this.jsonPath, JSON.stringify(content), (err, result) => {
      try {
        console.log(result);
      } catch (err) {
        fs.writeFile(this.jsonPath, JSON.stringify(content));
      }
    });
  }

  async loadJson() {
    try {
      return JSON.parse(await fs.promises.readFile(this.jsonPath));
    } catch (err) {
      return false;
    }
  }

  async addProduct(title, description, price, thumbnail, code, stock) {
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

  async getProducts() {
    return this.products;
  }

  async getProductById(findId) {
    const product = this.products.find(({ id }) => id === findId);
    if (product) {
      return product;
    } else {
      console.error("Não encontrado");
    }
  }
}

const init = () => {
  const catalog = new ProductManager("./aula_4_desafio.json");
  const content = [{ id: 0, title: "test" }];
  catalog.saveJson(content);
};

init();

console.groupEnd();
