const empleados = [
  {
    id: 1,
    nombre: "Esteban",
  },
  {
    id: 2,
    nombre: "Nicolas",
  },
  {
    id: 3,
    nombre: "Karen",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;

    empleado ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;

    salario
      ? resolve(salario)
      : reject(`No existe empleado con salario id ${id}`);
  });
};

const getInfoUsuario = async () => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El empleado ${empleado} tiene un salario ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 4;

getInfoUsuario(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
