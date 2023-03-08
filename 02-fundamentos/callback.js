


//setTimeout( ()=> {
//    console.log('Hola mundo');
//}, 1000);

const getIsuarioByID = (id, callback ) => {
    const usuario = {
        id,
        nombre: 'Esteban'
    }

    setTimeout(()=> {
        callback(usuario)
    }, 1500)
}

getIsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase())
});