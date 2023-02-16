document.getElementById('btnAbrir').addEventListener('click', function(){
    document.getElementsByClassName('fondo_transparente')[0].style.display = 'block'
    return false
});

document.getElementsByClassName("modal_cerrar")[0].addEventListener("click",function(){
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none"
});

window.addEventListener("resize", redimension())

function redimension() {
    var modal = document.getElementsByClassName("modal")[0]
    if(window.outerHeight<500){
        modal.style.height = "100%";
    }else if(window.outerHeight>=900){
        modal.style.height = "500px";
    }

    if(window.outerWidth < 1300){
        modal.style.width = "100%";
    }else if(window.outerWidth >= 1300){
        modal.style.width = "1300px";
    }
}