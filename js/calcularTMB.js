// Funcion para calcular la TMB
let calcularTMB = (genero) =>{

    //Capturar valores del form
    let nombre = document.getElementById('nombre').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let edad = document.getElementById('edad').value;
    let siMasculino = 5;
    let siFemenino = 165;
    let actividad = document.getElementById('actividad').value;

    //validaciones
    if(!peso == "" && !altura == "" && !edad == ""){
        peso = peso * 10;
        altura = altura * 6.25;
        edad = edad * 5;
        let TMBase = peso + altura - edad;
        let TMBActivadad = TMB(actividad, TMBase);

        //Mostrar resultado basado en el genero
        if(genero === "masculino"){
            TMBase = Intl.NumberFormat().format(Math.round(TMBActivadad + siMasculino));
            resultado(nombre, TMBActivadad, genero)
        }else if(genero === "femenino"){
            TMBase = Intl.NumberFormat().format(Math.round(TMBActivadad + siFemenino));
            resultado(nombre, TMBActivadad, genero)
        }

        setTimeout(() => {
            ocultarElemento("content-form")
        }, 500);

        setTimeout(() => {
            mostrarElemento("resultadoTMB")
        }, 500);
    }else{
        alert();
    }
}
