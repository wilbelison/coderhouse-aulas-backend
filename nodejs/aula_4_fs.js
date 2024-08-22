const fs = require("fs");

/* https://nodejs.org/api/fs.html#synchronous-example */

// const fsSynchronous = (path = "./aula_4_fs.txt", times = 3) => {
//   try {
//     const content = fs.readFileSync(path, "utf8");
//     const line = content.split("\n").length;

//     if (line <= times) {
//       fs.appendFileSync(
//         path,
//         `\n${new Date().toLocaleString("pt-BR")}: Hello world! (${line})`
//       );
//       console.log("File modified!");
//     } else {
//       fs.unlinkSync(path);
//       console.log("File deleted!");
//     }
//   } catch (err) {
//     try {
//       fs.writeFileSync(
//         path,
//         `\n${new Date().toLocaleString("pt-BR")}: Hello world! (1)`
//       );
//       console.log("File created!");
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

// fsSynchronous();

/* https://nodejs.org/api/fs.html#promise-example */

// const fsPromises = async (path = "./aula_4_fs.txt", times = 3) => {
//   try {
//     const content = await fs.promises.readFile(path, "utf8");
//     const line = content.split("\n").length;

//     if (line <= times) {
//       await fs.promises.appendFile(
//         path,
//         `\n${new Date().toLocaleString("pt-BR")}: Hello world! (${line})`
//       );
//       console.log("File modified!");
//     } else {
//       await fs.promises.unlink(path);
//       console.log("File deleted!");
//     }
//   } catch (err) {
//     try {
//       await fs.promises.writeFile(
//         path,
//         `\n${new Date().toLocaleString("pt-BR")}: Hello world! (1)`
//       );
//       console.log("File created!");
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

/* https://nodejs.org/api/fs.html#callback-example */

const fsCallback = (path = "./aula_4_fs.txt", times = 3) => {
  
}