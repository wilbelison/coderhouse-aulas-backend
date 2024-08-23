const fs = require("fs");

/* ========== 1. Exemplo Síncrono ========== */

const fsSynchronous = (path = "./aula_4_fs_sync.txt", limit = 3) => {
  try {
    const content = fs.readFileSync(path, "utf8");
    const lineCount = content.split("\n").length;

    if (lineCount < limit) {
      fs.appendFileSync(
        path,
        `\n${new Date().toLocaleString("pt-BR")}: Hello world! (${lineCount + 1})`
      );
      console.log("File modified!");
    } else {
      fs.unlinkSync(path);
      console.log("File deleted!");
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        fs.writeFileSync(
          path,
          `${new Date().toLocaleString("pt-BR")}: Hello world! (1)`
        );
        console.log("File created!");
      } catch (writeErr) {
        console.error("Error creating file:", writeErr);
      }
    } else {
      console.error("Error handling file:", err);
    }
  }
};

fsSynchronous();

/* ========== 2. Exemplo com Async/Promises ========== */

const fsPromises = async (path = "./aula_4_fs_async.txt", limit = 10) => {
  try {
    const content = await fs.promises.readFile(path, "utf8");
    const lineCount = content.split("\n").length + 1;

    if (lineCount <= limit) {
      await fs.promises.appendFile(
        path,
        `\n${new Date().toLocaleString("pt-BR")}: Hello world! (${lineCount})`
      );
      console.log("File modified!");
    } else {
      await fs.promises.unlink(path);
      console.log("File deleted!");
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      try {
        await fs.promises.writeFile(
          path,
          `${new Date().toLocaleString("pt-BR")}: Hello world! (1)`
        );
        console.log("File created!");
      } catch (writeErr) {
        console.error("Error creating file:", writeErr);
      }
    } else {
      console.error("Error handling file:", err);
    }
  }
};

fsPromises();

/* ========== 3. Exemplo com Callbacks ========== */

const fsCallback = (path = "./aula_4_fs_callback.txt", limit = 3) => {
  const createFile = () => {
    const content = `${new Date().toLocaleString("pt-BR")}: Hello world! (1)`;
    fs.writeFile(path, content, (err) => {
      if (err) {
        console.error("Error creating file:", err);
      } else {
        console.log("File created!");
      }
    });
  };

  const modifyFile = (content) => {
    const lineCount = content.split("\n").length + 1;

    if (lineCount <= limit) {
      const newContent = `\n${new Date().toLocaleString(
        "pt-BR"
      )}: Hello world! (${lineCount})`;
      fs.appendFile(path, newContent, (err) => {
        if (err) {
          console.error("Error modifying file:", err);
        } else {
          console.log("File modified!");
        }
      });
    } else {
      fs.unlink(path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        } else {
          console.log("File deleted!");
        }
      });
    }
  };

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        createFile();
      } else {
        console.error("Error reading file:", err);
      }
    } else {
      modifyFile(data);
    }
  });
};

fsCallback();
