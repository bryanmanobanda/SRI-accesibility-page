function mostrar_advertencia(){
    var valor = document.getElementById("ingresoDatos").value;
    console.log("Ingreso1");
    console.log(valor);
    if (valor=="PCA2445"){
        console.log("Ingreso");
        document.getElementById("consulta_form").setAttribute("action", "reporte.html");
        document.getElementById("consultar").setAttribute("type", "submit");
    }
    if(valor===""){

    }
    else{
        document.getElementById('dialog-box').showModal();
    }
}

function cerrar_ventana(){
    document.getElementById('dialog-box').close();
}


function cambiarTamanoLetra(valor) {
	var elementosH1 = document.getElementsByTagName("h1");
	var elementosP = document.getElementsByTagName("p");
	var elementosSpan = document.getElementsByTagName("span");
	var elementosH2 = document.getElementsByTagName("h2");
	var elementosA = document.getElementsByTagName("a");
	var elementosLI = document.getElementsByTagName("li");
	var elementosINP = document.getElementsByTagName("input");
	var elementosH4 = document.getElementsByTagName("h4");
	var elementosLB = document.getElementsByTagName("label");
	var elementosBT = document.getElementsByTagName("button");
	var elementosEM = document.getElementsByTagName("em");

	for (var i = 0; i < elementosH1.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosH1[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosH1[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosP.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosP[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosP[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosSpan.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosSpan[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosSpan[i].style.fontSize = tamanoNuevo;
	}

	for (var i = 0; i < elementosH2.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosH2[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosH2[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosA.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosA[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosA[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosLI.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosLI[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosLI[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosINP.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosINP[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosINP[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosH4.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosH4[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosH4[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosLB.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosLB[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosLB[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosBT.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosBT[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosBT[i].style.fontSize = tamanoNuevo;
	}
	for (var i = 0; i < elementosEM.length; i++) {
		var tamanoActual = window.getComputedStyle(elementosEM[i], null).getPropertyValue("font-size");
		var tamanoNuevo = parseInt(tamanoActual) + valor + "px";
		elementosEM[i].style.fontSize = tamanoNuevo;
	}
}

function setLanguage(languageCode) {
	document.documentElement.lang = languageCode;
  }