const titleStyle = "font-weight: bolder; font-size: 16px;";
console.group("%cExemplo de Promisses (Async, Await, Then, Try e Catch)", titleStyle);

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
    console.log("nested .then():", resultado);
  })
  .catch((error) => {
    console.error("nested .catch(error):", error);
  })
  .finally(() => {
    console.log("nested .finally()");
  });

dividir(4, 2)
  .then((resultado) => {
    console.log("nested .then():", resultado);
  })
  .catch((error) => {
    console.error("nested .catch(error):", error);
  })
  .finally(() => {
    console.log("nested .finally()");
  });

/*  async try{} catch(){} finally{} */

async function assincrona(valor, divisor) {
  try {
    const resultado = await dividir(valor, divisor);
    console.log("async try{}:", resultado);
  } catch (error) {
    console.error("async catch(error){}:", error);
  } finally {
    console.log("async finally{}");
  }
}

assincrona(4, 0);
assincrona(4, 2);

console.groupEnd();
