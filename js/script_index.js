/* Desplegar Menu */
function menuBarraLateral() {
    var menuLateral = document.getElementById("barraLateral");
    if (menuLateral.style.display=="none") {
        menuLateral.style.display="block";
    } else {
        menuLateral.style.display="none";
    }
}
/* Presentar subopciones */
function opcionSubmenu() {
    var submenu = document.getElementById("submenu");
    if (submenu.style.display === "none") {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
}
/*SubOpciones en la matriz */
function toggleSubmenuOpciones() {
    var submenuOp = document.getElementById("submenuOpciones");
    if (submenuOp.style.display === "none") {
      submenuOp.style.display = "block";
    } else {
      submenuOp.style.display = "none";
    }
}

//Accesibilidad boton menu
const botonMenu = document.getElementById('botonHamburguesa');
botonMenu.addEventListener('click', () => {
  const menuExpandido = botonMenu.getAttribute('aria-expanded') === 'true';
  if (!menuExpandido) {
    botonMenu.setAttribute('aria-label', 'Accionar para cerrar menu');
    botonMenu.setAttribute('aria-expanded', 'true');
  } else {
    botonMenu.setAttribute('aria-label', 'Accionar para abrir menu');
    botonMenu.setAttribute('aria-expanded', 'false');
  }
});

//Cerrar el menu con ESC
document.addEventListener('keydown', (evento) => {
  var menuLateral = document.getElementById("barraLateral");
  if (evento.key === 'Escape') {
    menuLateral.style.display="none";
    botonMenu.setAttribute('aria-expanded', 'false');
  }
});


//Una vez abierto el menu si da un tab el foco se dirigue al primer elemento
const primerElemento = document.getElementById('primeraOpcion');
botonMenu.addEventListener('keydown', (event) => {
  const teclaPresionada = event.key;
  
  if (teclaPresionada === 'Tab' && botonMenu.getAttribute('aria-expanded') === 'true') {
    event.preventDefault();
    primerElemento.focus();
  }
});

//Accesibilidad boton Vehiculos menu lateral
const botonVehiculo = document.getElementById('VehiculoML');
botonVehiculo.addEventListener('click', () => {
  const vehExpandido = botonVehiculo.getAttribute('aria-expanded') === 'true';
  if (!vehExpandido) {
    botonVehiculo.setAttribute('aria-label', 'Accionar para cerrar la lista de opciones');
    botonVehiculo.setAttribute('aria-expanded', 'true');
  } else {
    botonVehiculo.setAttribute('aria-label', 'Accionar para abrir la lista de opciones');
    botonVehiculo.setAttribute('aria-expanded', 'false');
  }
});

const miBoton = document.querySelector('div[role="button"]');
miBoton.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 || event.keyCode === 32) {
    opcionSubmenu();
  }
});

//Accesibilidad boton Vehiculos Opciones Matriz
const botonVehiculoM = document.getElementById('VehiculoMOp');
botonVehiculoM.addEventListener('click', () => {
  const vehExpandidoM = botonVehiculoM.getAttribute('aria-expanded') === 'true';
  if (!vehExpandidoM) {
    botonVehiculoM.setAttribute('aria-label', 'Accionar para cerrar la lista de opciones');
    botonVehiculoM.setAttribute('aria-expanded', 'true');
  } else {
    botonVehiculoM.setAttribute('aria-label', 'Accionar para abrir la lista de opciones');
    botonVehiculoM.setAttribute('aria-expanded', 'false');
  }
});
botonVehiculoM.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 || event.keyCode === 32) {
    toggleSubmenuOpciones();
  }
});

document.addEventListener('keydown', (evento) => {
  var menuMatriz = document.getElementById("submenuOpciones");
  var menuMatriz2 = document.getElementById("VehiculoMOp");
  if (evento.key === 'Escape') {
    menuMatriz.style.display="none";
    menuMatriz2.setAttribute('aria-expanded', 'false');
  }
});


function zoomIn(scale) {
  document.body.style.zoom = scale;
}
function zoomOut(scale) {
  document.body.style.zoom = scale;
}


  