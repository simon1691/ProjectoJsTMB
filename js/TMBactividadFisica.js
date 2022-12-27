//Calcular la TMB segun actividad fisica
let TMB = (actividad, TMBase) => {
    let TMB
    if(actividad == 1 ){
        TMB = Math.round(TMBase * 1.2);
    }else if (actividad == 2 ){
        TMB = Math.round(TMBase * 1.375);
    }else if (actividad == 3 ){
        TMB = Math.round(TMBase * 1.55);
    }else if (actividad == 4 ){
        TMB = Math.round(TMBase * 1.725);
    }else if (actividad == 5 ){
        TMB = Math.round(TMBase * 1.9);
    }
    return TMB
}