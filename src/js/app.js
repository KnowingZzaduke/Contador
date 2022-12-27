//Función horas
function horas(){
    let fecha = new Date();
    let horas = fecha.getHours;
    let minutos = fecha.getMinutes;
    let segundos = fecha.getSeconds;

    if(horas < 10){
        horas = "0" + horas;
    }else if (minutos < 10){
        minutos = "0" + minutos;
    }else if (segundos < 10 ){
        segundos = "0" + segundos;
    }
}

horas();