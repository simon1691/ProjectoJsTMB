// funcion para eliminar un elemento
let ocultarElemento = (id) => {
    let elemento = document.getElementById(id);
    elemento.classList.add('d-none');
}
// funcion para esconder elementos
let mostrarElemento = (id) => {
    let elemento = document.getElementById(id);
    elemento.classList.remove('d-none');
}