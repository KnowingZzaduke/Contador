//Declaro las varibales
let inputs, clock, alarm, hours, minutes, seconds, repeater, newHours, newMinutes, newSeconds;

window.addEventListener('load', () =>{
    clock = document.querySelector('.content_time');
    alarm = new Audio('src/audio/campana.mp3');
})

//Función para inicializar el conteo
function startTimer(){
    //Función para transformar los valores de los inputs a números
    perseTimer();
    //Función para mostar el conteo en la pantalla
    setTimer();
    //Función para arrancar el contador
    inicializar();
}

//Función para crear inputs
function newInputs(){
    //Nuevo input que da la hora
    newHours = document.createElement('input');
    newHours.classList.add('newHours');
    newHours.setAttribute("maxlength", "");
    newHours.value = `${hours}`;
    clock.appendChild(newHours);
}

//Funcion para agregar el conteo en tiempo real
function setTimer(){
    if(hours > 9){
        hours = '0' + hours;
    }else if(minutes > 9){
        minutes = '0' + minutes;
    }else if(seconds > 9){
        seconds = '0' + seconds
    }
}

function perseTimer(){
    hours = document.querySelector('.hours').value;
    console.log(hours);
    minutes = document.querySelector('.minutes').value;
    console.log(minutes);
    seconds = document.querySelector('.seconds').value;
    console.log(seconds);
}



//Función para arrancar el contador
function inicializar(){
    repeater = setInterval(runner, 1000);
}


//Función encargada del conteo
function runner(){
    /* Si tengo más de 0 segundos, restá segundos */
    /* Si tengo 0 segundos pero tengo más de 0 minutos, poné segundos en 59 y restale 1 a minutos */
    /* Si tengo 0 segundos, 0 minutos pero tengo más de 0 horas, poné segundos en 59, minutos en 59 y restale 1 a horas */
    /* Sino arranca la alarma */
    
    if(seconds > 0){
        seconds--;
    }else{
        if(minutes > 0){
            seconds = 59;
            minutes--;
        }else{
            if(hours > 0){
                seconds = 59;
                minutes = 59;
                hours--;
            }else{
                alarm.play();
            }
        }
    }
    setTimer();
    newInputs();

}

//Función para detener el conteo
function stopTimer(){
    clearInterval(repeater);
    location.reload();
}

