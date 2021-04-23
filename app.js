const { options } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
// console.clear();
//const base = 2;

// const [, , arg3 = "base=6"] = process.argv;
// console.log(arg3);
// const [, base = 6] = arg3.split("=");

// console.log(process.argv);
console.log(argv);
// console.log("base: yarg", argv.base);
crearArchivo(argv.b, argv.l, argv.h)
  .then(() => console.log("creado".rainbow))
  .catch((err) => {
    console.log(err);
  });
