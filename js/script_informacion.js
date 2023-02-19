function mostrar_detalle(){
    document.getElementsByClassName('fondo_transparente')[0].style.display = 'block';
    document.getElementsByClassName('cuerpo')[0].style.background = 'rgba(83, 83, 83, 0.226)';
    return false
}

document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
    document.getElementsByClassName('cuerpo')[0].style.background = 'rgba(83, 83, 83, 0)';
});

window.addEventListener("resize", redimension())
/*
function redimension() {
    var modal = document.getElementsByClassName("caja")[0]
    if(window.outerHeight<600){
        modal.style.height = "100%";
    }else if(window.outerHeight>=100){
        modal.style.height = "500px";
    }

    if(window.outerWidth < 1000){
        modal.style.width = "100%";
        modal.style.top= "0px";
        modal.style.left= "0px";
        modal.style.height = "100%";
    }else if(window.outerWidth >= 1024){
        modal.style.width = "1300px";
    }
}*/