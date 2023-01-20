let masculino = document.getElementById("masculino");
let femenino = document.getElementById("femenino");

let masculinoId = masculino.id;
let femeninoId = femenino.id

let subirPeso = document.getElementById("subir");
let subirPesoId = subirPeso.id;

let bajarPeso = document.getElementById("bajar");
let bajarPesoId = bajarPeso.id;

// Funcion principal para ejecutar
// la aplicacion basado en el genero seleccionado

let seleccionarGenero = (genero) => {

    if (genero === "masculino" || genero === "femenino") {

        ocultarElemento("content-gender")
        mostrarElemento("content-form")

        //capturar id de boton submit
        let submit = document.getElementById('calcular')

        //llamado de funciones
        submit.addEventListener("click", preventDefault)
        submit.addEventListener("click", function () {
            calcularTMB(genero);
        })
    }
}

masculino.addEventListener('click', function () {
    seleccionarGenero(masculinoId)
});
femenino.addEventListener('click', function () {
    seleccionarGenero(femeninoId)
});
