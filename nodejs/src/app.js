// DESAFIO OBRIGATÓRIO
// Servidor com express

// Objetivo:
// Desenvolva um servidor baseado em express onde possamos consultar nosso arquivo de produtos.

// Aspectos a incluir:

// ✓ Você precisará usar a classe ProductManager que usamos atualmente com persistência de arquivo.
// ✓ Desenvolva um servidor expresso que, em seu arquivo app.js, importe o arquivo ProductManager que temos atualmente.

// O servidor deve ter os seguintes endpoints:

// ✓ Caminho '/products', que deve ler o arquivo products e retorná-los dentro de um objeto. Adicione suporte para receber por parâmetro de query o valor ?limit= que receberá um limite de resultados.
// ○ Se nenhuma consulta de limite for recebida, todos os produtos serão devolvidos
// ○ Se for recebido um limite, devolva apenas o número de produtos solicitados
// ✓ rota '/products/:pid', que deve receber o pid (ID do produto) por req.params, e retornar apenas o produto solicitado, ao invés de todos os produtos.

// Sugestões:

// ✓ Sua classe lê arquivos com promessas. lembre-se de usar async/await em seus endpoints
// ✓ Use um arquivo que já tenha produtos pois o desafio é apenas para gets.

// Formato de entrega:

// ✓ Link para o repositório Github com o projeto completo, que deve incluir: src com app.js dentro e seu ProductManager dentro.○ package.json com as informações do projeto.
// ○ NÃO INCLUA node_modules gerados.

import express, { urlencoded } from "express";
// import ProductManager from "../ProductManager.js";

const app = express();

app.use(urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.redirect("/products?limit=10");
});

app.get("/products", function (req, res) {
  const limit = req.query.find("limit");
  res.send(``);
});

app.get("/products/:pid", function (req, res) {
  res.send(`${pid}`);
});

app.listen(8080, () => {
  console.log("Server running on port 8080", "http://localhost:8080");
});
