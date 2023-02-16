bandera = 0;
function ocultarDetallesVehiculo(){
    let elementoDetalles = document.getElementById("detallesVehiculo");
    let elementoIcono = document.getElementById("iconoDetalles");
    if (bandera == 1){  
        elementoDetalles.setAttribute('style', 'display:none');
        elementoIcono.setAttribute('class', 'colorSecundarioFuente fa-sharp fa-solid fa-caret-right');
        bandera = 0;
    }else{
        elementoDetalles.setAttribute('style', 'display:flex');
        elementoIcono.setAttribute('class', 'colorSecundarioFuente fa-sharp fa-solid fa-caret-down');
        bandera = 1;
    }
}