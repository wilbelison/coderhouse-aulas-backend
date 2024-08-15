console.group("Exemplo de Promisses (Async, Await, Then, Try e Catch)");

const dividir = (valor, divisor) => {
  if (typeof valor !== "number" || typeof divisor !== "number") {
    throw new Error("Valor e divisor devem ser números");
  }
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("0 não é um divisor válido");
    } else {
      const resultado = valor / divisor;
      resolve(resultado);
    }
  });
};

/* nested dividir().then().catch().finally() */

dividir(4, 0)
  .then((resultado) => {
    console.log("Resultado é", resultado);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("finally");
  });

dividir(4, 2)
  .then((resultado) => {
    console.log("Resultado é", resultado);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

/*  async try{} catch(){} finally{} */

async function assincrona(valor, divisor) {
  try {
    const resultado = await dividir(valor, divisor);
    console.log(resultado);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("finally");
  }
}

assincrona(4, 0);
assincrona(4, 2);

console.groupEnd();
