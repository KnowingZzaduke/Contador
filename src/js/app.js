//Declaro las varibales
let alarm, hours, minutes, seconds, repeater, contentButtons, contentInput, clockImg, clockGif;

window.addEventListener('load', () =>{
    contentInput = document.querySelector('.content_time');
    contentButtons = document.querySelector('.content_botones');
    clockImg = document.querySelector('.clock_img');
    clockGif = document.querySelector('.clock_gif');
    alarm = new Audio('src/audio/campana.mp3');
})

//Función para inicializar el conteo
function startTimer(){
    //Función para seleccionar los valores de los inputs
    perseTimer();

    //Función para mostar el conteo en la pantalla
    setTimer();
    
    //Función para arrancar el contador
    determinar();
}


function perseTimer(){
    hours = document.querySelector('.hours').value;
    minutes = document.querySelector('.minutes').value;
    seconds = document.querySelector('.seconds').value;
}

//Funcion para agregar el conteo en tiempo real
function setTimer(){
    if(hours > 9){
        hours = 0 + hours;
    }else if(minutes > 9){
        minutes = 0 + minutes;
    }else if(seconds > 9){
        seconds = 0 + seconds;
    }

    contentInput.innerHTML = `<input type="text" maxlength="2" value="${hours}" class="hours"><input type="text" maxlength="2" value="${minutes}" class="minutes"><input type="text" maxlength="2" value="${seconds}" class="seconds">`
    document.title = `${hours}:${minutes}:${seconds}`;
}


//Función para arrancar el contador
function inicializar(){
    repeater = setInterval(runner, 1000);
}

//Función para cambiar los iconos
function changeIcons(){
    clockImg.style.display = ('none');
    clockGif.style.display = ('block');
}

//Función para mostrar una alerta si no se ha ingresado ninún número
function mostrarAlerta(){
    contentButtons.insertAdjacentHTML('afterend', '<p class="alert">Debes ingresar un tiempo en el contador</p>');
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
    changeIcons();
}

//Función encargada de determinar si genera la alerta o realiza el contéo
function determinar(){
    if(seconds == 0){
        let temporizadorMensaje = setTimeout(()=>{
        mostrarAlerta();;
    }, 1000);
        clearTimeout(temporizadorMensaje);
    }else{
        inicializar();
    }
}


//Función para detener el conteo
function stopTimer(){
    clearInterval(repeater);
    location.reload();
}

