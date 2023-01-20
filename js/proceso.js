// Funcion para calcular la nueva TMB segun seleccion
// del Usuario: Subir o Bajar de peso
let proceso = (proceso, TMB, genero) => {
    if (proceso === "subir" || proceso === "bajar") {

        setTimeout(() => {
            ocultarElemento("resultadoTMB")
        }, 500);

        setTimeout(() => {
            mostrarElemento("subirBajarPeso")
        }, 500);

        let pesoTitulo = document.getElementById("pesoProcesoTitulo")
        let procesoVariable = document.querySelectorAll(".procesoVariable");
        let pesoTMB = document.getElementById("pesoTMB");
        let caloriasExplicacion = document.getElementById("caloriasExplicacion");

        caloriasExplicacion.innerText = `${proceso === "subir" ? "aumentar" : "reducir"}`;


        let subirHTML = `
        <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15L10.083 8.90331L15.2303 11.5972L20 5.99998" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3188 5.37653L20.9425 5.15701L20.8624 7.86795" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1V18H23" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
        <h4 class="m-0 p-0">Subir de Peso</h4>`

        let bajarHTML = `
        <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3.91132L10.083 10.008L15.2303 7.31406L20 12.9113" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M18.3188 13.5348L20.9425 13.7543L20.8624 11.0434" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1V18H23" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
        <h4 class="m-0 p-0">Bajar de Peso</h4>`


        pesoTitulo.innerHTML = `
        <div class="peso-proceso m-0 d-flex gap-3  align-items-center">
        ${proceso === "subir" ? subirHTML : bajarHTML}
        </div>
        `

        procesoVariable.forEach(element => {
            element.innerHTML = proceso;
        });

        pesoTMB.innerHTML = Intl.NumberFormat().format(TMB);

        //llamado de funcion Calucar valores peso
        submitPeso.addEventListener("click", preventDefault)
        submitPeso.addEventListener("click", function () {
            calcularValoresPeso(TMB, proceso, genero)
        })
    }
}