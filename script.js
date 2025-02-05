'use strict'; //Nos ayuda a q el código sea + seguro (Se asegura d q todas las variables q utilizamos han sido previmiante declaradas)

//Definimos las referencias de los HTMLElement q vamos a utilizar
const videoFrame = document.getElementById('video_frame');
const canvasFrame = document.getElementById('canvas_frame');
const snapFrame = document.getElementById('snap_frame');
const errorMsgElement = document.querySelector('span#errorMsg');

//Establecemos el tamaño del video y si queremos incluir el audio o no
const constraints = {
    video: {
        width: 500,
        height: 350
    }
};

//Comprobamos acceso a webcam
async function init() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia('constraints');
        handleSuccess(stream);
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error :${e.toString()}`;
    }
}

//En caso de que el user acepte los permisos, cargamos la webcam
async function handleSuccess(stream) {
    //Guardamos el contexto del canvas para hacer la captura
    videoFrame.srcObject = stream;
    //Mostramos la img que hemos capturado (el frame del video)
}

//Llamamos al método para iniciar el proceso
init();