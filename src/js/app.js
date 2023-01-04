//Declaro las varibales
let alarm, hours, minutes, seconds, repeater, contentInput;

window.addEventListener('load', () =>{
    contentInput = document.querySelector('.content_time');
    input1 = document.querySelector('.input_1');
    input2 = document.querySelector('.input_2');
    input3 = document.querySelector('.input_3');
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

//Funcion para agregar el conteo en tiempo real
function setTimer(){
    if(hours > 9){
        hours = '0' + hours;
    }else if(minutes > 9){
        minutes = '0' + minutes;
    }else if(seconds > 9){
        seconds = '0' + seconds
    }

    contentInput.innerHTML = `<input type="text" maxlength="2" value="${hours}" class="hours"><span>hs</span><input type="text" maxlength="2" value="${minutes}" class="hours"><span>Min</span><input type="text" maxlength="2" value="${seconds}" class="hours"><span>Sec  </span>    `

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
}

//Función para detener el conteo
function stopTimer(){
    clearInterval(repeater);
    location.reload();
}

