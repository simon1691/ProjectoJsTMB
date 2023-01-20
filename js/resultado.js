// funcion para mostrar resultado en patalla al seleccionar subir o bajar de peso
let resultado = (nombre, TMB, genero) => {
    const tmbTexto = document.getElementById('resultado-calorias');
    const defTexto = document.getElementById('resultado-definicion');
    let coma = Intl.NumberFormat().format(TMB)
    tmbTexto.innerHTML = `
        <div>
            <h3>${!nombre == "" ? nombre[0].toUpperCase() + nombre.substring(1) : "Hola!"},<br>
            tu TMB es de:<h3>
            <h1>${coma}</h1>
            <h3>Calorias diarias</h3>
        </div>
    `
    defTexto.innerHTML = `
    <p class="definicion">Esto significa que: tu ingesta diaria de  calorias debe ser de <strong>${coma} calorias</strong> para mantener tu peso actual y poder suplir de energia a tu cuerpo  para realizar las funciones basicas, como: pensar, respirar, caminar, etc.
    `

    // Lamando de Funcion Proceso
    subirPeso.addEventListener('click', function () {
        proceso(subirPesoId, TMB, genero)
    });
    bajarPeso.addEventListener('click', function () {
        proceso(bajarPesoId, TMB, genero)
    });
}