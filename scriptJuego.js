/* Drag & Drop juego */
let contador=0;

function iniciar(){
    var imagenes= document.querySelectorAll('#imagen-caja img');
     destino1 =document.getElementById('caja-destino-1');  
     destino2  =document.getElementById('caja-destino-2'); 
     destino3 = document.getElementById('caja-destino-3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    destino1.addEventListener('dragenter', 
    function(e){
    e.preventDefault(); }, false);
    destino1.addEventListener('dragover', 
    function(e){
    e.preventDefault(); }, false);
    destino1.addEventListener('drop', soltado, false);


    destino2.addEventListener('dragenter',
    function(e){
    e.preventDefault(); }, false);
    destino2.addEventListener('dragover',
    function(e){
    e.preventDefault(); }, false);
    destino2.addEventListener('drop', soltado, false);


    destino3.addEventListener('dragenter',
    function(e){
    e.preventDefault(); }, false);
    destino3.addEventListener('dragover',
    function(e){
    e.preventDefault(); }, false);
    destino3.addEventListener('drop', soltado, false);

}
function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
     e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="270px">';
    contador++

    if (contador === 3) {
        alert('¡Felicitaciones! ¡Terminaste el juego!');
    }
}

function reinicio() {
    window.location.reload();
}
iniciar()