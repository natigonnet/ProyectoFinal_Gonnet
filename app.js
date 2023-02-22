
// Menu del lateral:

var menuqueseve = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (menuqueseve == false) { // si está oculto
        menu.style.display = "block";
        menuqueseve = true;
    }
    else {
        menu.style.display = "none";
        menuqueseve = false;
    }
}

// Oculto el menu luego de seleccionar una opcion 

let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menuqueseve = false;
    }
}



// Barras para una barra en particular.

function crearBarrita(id_barra) {
    for (i = 0; i <= 16; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Seleccionar las barras generales para manipularlas luego
let html = document.getElementById("html");
crearBarrita(html);

let javascript = document.getElementById("javascript");
crearBarrita(javascript);

let PaqueteOffice = document.getElementById("PaqueteOffice");
crearBarrita(PaqueteOffice);

let HistoriaClinicaElectronica = document.getElementById("HistoriaClinicaElectronica");
crearBarrita(HistoriaClinicaElectronica);

let contadores = [-1, -1, -1, -1, -1, -1]
// para ver si se ejecuta animación
let entro = false;

function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distanciaSkills = window.innerHeight = habilidades.getBoundingClientRect().top;
    if (distanciaSkills>= 300 && entro == false){
        entro = true;
        const intervalHtml = setInterval(function() {
            pintarBarra(html, 16, 0, intervalHtml);
        }, 100);
        const intervalJavascript = setInterval(function() {
            pintarBarra(javascript, 11, 1, intervalJavascript);
        }, 100);
        const intervalPaqueteOffice = setInterval(function() {
            pintarBarra(PaqueteOffice, 15, 3, intervalPaqueteOffice);
        }, 100);
        const intervalHistoriaClinicaElectrónica = setInterval(function() {
            pintarBarra(HistoriaClinicaElectronica, 16, 4, intervalHistoriaClinicaElectrónica);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    } else {
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}






