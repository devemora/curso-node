require('colors');

const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

const main = async () => {
  let opt = '';
  const tareas = new Tareas();

  const tareasDb = leerDb();

  if (tareasDb) {
    //establecer tareas
  }
  await pausa();
  do {
    //imprimir el menu
    opt = await inquirerMenu();
    console.log(opt);

    switch (opt) {
      case '1':
        // crear opcion
        const desc = await leerInput('Descripcion:');
        tareas.crearTarea(desc);
        break;

      case '2':
        console.log(tareas.listadoArr);
      default:
        break;
    }

    guardarDb(tareas.listadoArr);
    await pausa();
  } while (opt !== '0');
};

main();
