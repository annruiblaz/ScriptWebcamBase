//Almacenamos una referencia al elemento HTML de video con su id
const video = document.getElementById('videoElement');

//Verifica si el navegador es compatible con la API de getUserMedia
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //Si es compatible, solicita el acceso a la webcam
    navigator.mediaDevices.getUserMedia({video: true})
        .then( function(stream) {
            //Si el user nos permite acceso a la webcam
            //Asignamos en el elemento HTML del video el stream (flujo) q nos viene de la webcam
            video.srcObject = stream;
        }).catch( function(error) {
            //En caso de error lo recogemos e imprimimos en consola
            console.error('Se ha producido un error al acceder a la webcam. ', error);
        });
} else {
    console.error('getUserMedia no es compatible con este navegador.')
}