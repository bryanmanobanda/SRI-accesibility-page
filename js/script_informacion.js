var overlay = document.getElementById("overlay");
var modal = document.getElementsByClassName('fondo_transparente')[0];
var firstElement = document.querySelector(".fondo_transparente .caja");
var header = document.querySelector(".fondo_transparente .caja h1");
var tabla = document.querySelector(".fondo_transparente .tablaReportes");
var elementos = tabla.querySelectorAll('td');
var ultimoElemento = elementos[elementos.length - 1];


function mostrar_detalle(){
    modal.style.display = 'block';    
    overlay.style.display = "block";
    firstElement.focus();
    return false
}

document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
    modal.style.display = "none";
    overlay.style.display = "none";
});

ultimoElemento.addEventListener('keydown', function(e) {
  if (e.keyCode == 9) {
    e.preventDefault();
    firstElement.focus();
  }
});

header.addEventListener('keydown', function(e) {
  if (event.keyCode === 9 && event.shiftKey) {
    e.preventDefault();
    ultimoElemento.focus();
  }
});

overlay.onclick = function(event) {
    if (event.target == overlay) {
        firstElement.focus();
    }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    if (modal.style.display === "block") {
      modal.style.display = "none";
    }
  }
});