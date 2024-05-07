/* Controles video */
let video=document.querySelector('video');
let botonPlay = document.getElementById("play");
let botonPausa = document.getElementById("pause");
let botonStop = document.getElementById('stop')

setTimeout(()=>{

    document.getElementById('duracionVideo').innerHTML='Duracion video  4:41'},100);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)  
}

botonPlay.addEventListener('click', () => {
    video.play();
});

botonPausa.addEventListener('click', () => {
    video.pause();
});

botonStop.addEventListener('click', () => {
    console.log('Botón "stop" presionado');
    video.pause();
    video.currentTime = 0;
    video.load();
});