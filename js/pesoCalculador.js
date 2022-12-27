//Funcion para capturar los valores de Kilos a subir y tiempo
let calcularValoresPeso = (TMB, proceso, genero) =>{
    let resulPesoContenedor = document.getElementById("pesoProcesoCard");
    let kilosValor = document.getElementById("pesoKilos").value;
    let meses = document.getElementById("pesoMeses").value;
    let caloriasEnKilo = 7000;
    let mesDias = 30;

    //validaciones
    if(!kilosValor == "" && !meses == ""){
        let kilosCalorias = kilosValor * caloriasEnKilo;
        let mesEnDias = meses * mesDias;
        let caloriasDiarias = Math.round(kilosCalorias / mesEnDias);
        let nuevaTMB = Intl.NumberFormat().format(proceso === "subir" ? TMB +  (+caloriasDiarias) : TMB -  (+caloriasDiarias));
        let rangoMeses = `Del Mes 1 al ${meses}`
        resulPesoContenedor.innerHTML = `
        <div class="peso-resultodo d-flex d-flex justify-content-center flex-column align-items-start"> 
            <h4>${meses == "1" ? "Calorias" : `${rangoMeses}`}<h4>
            <h1>${caloriasDiarias} kc</h1>
            <p>${proceso === "subir" ? "Diarias que debes aumentar" : "Diarias que debes reducir"}</p>
        </div>
        <div class="line"></div>
        <div class="peso-resultodo d-flex d-flex justify-content-center flex-column align-items-start"> 
            <h4>Nueva TMB diaria</h4>
            <h1>${nuevaTMB} kc</h1>
            <p>Diarias</p>
        </div>
        `

        // llamar la funcion que muestra los productos
        productos();
    }else{
        alert();
    }
}

 //capturar id de boton submit en formulario de meses y kilos
 let submitPeso = document.getElementById('calcularTiempo');