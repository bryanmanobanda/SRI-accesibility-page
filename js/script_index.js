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
  