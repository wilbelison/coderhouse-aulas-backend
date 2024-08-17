const fs = require("fs");

/* fs sync */

const arquivo = "./saudacao.txt";
const saudacao = fs.existsSync(arquivo);
let conteudo = "";
let linhas = 0;

if (saudacao) {
  conteudo = fs.readFileSync(arquivo, "utf-8");
  linhas = conteudo.split("\n").length;
  console.log(conteudo);
  if (linhas < 10) {
    fs.appendFileSync(arquivo, `\n${new Date().toLocaleString("pt-BR")}: Hello world!`);
  } else {
    fs.unlinkSync(arquivo);
    console.log("\nArquivo excluído");
  }
} else {
  fs.writeFileSync(arquivo, `\n${new Date().toLocaleString("pt-BR")}: Hello world!`);
  console.log("Arquivo criado");
  console.log(conteudo);
}

/* fs async (função de callback) */

// const arquivo2 = "./saudacao2.txt";

// fs.writeFile(arquivo2, `${new Date().toLocaleString("pt-BR")}: Hello world!`, (error) => {
//   if (error) throw new Error("Erro na criação do arquivo");

//   fs.readFile(arquivo2, "utf-8", (error, conteudo) => {
//     if (error) throw new Error("Erro na leitura do arquivo");
//     console.log(conteudo);
//   });
// });
