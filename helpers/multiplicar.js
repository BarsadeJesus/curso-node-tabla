const fs = require("fs");
const colors = require("colors");
const crearArchivo = async (base, listar = false, hasta = 10) => {
  try {
    let salida,
      consola = "";

    for (let i = 1; i <= hasta; i++) {
      //   const number = numero * i;
      //   console.log(`${numero} * ${i} = ${numero * i}`);
      salida = salida + `${base} "x" ${i} "=" ${base * i}\n`;
      consola = consola + `${base} ${"x".green} ${i} ${"=".red} ${base * i}\n`;
    }
    if (listar) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    await console.log(`tabla-${base}.txt`);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  crearArchivo,
};
