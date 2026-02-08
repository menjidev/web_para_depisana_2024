var menuDesplegable = document.getElementById("modal_responsive");
var icono_modal = document.getElementById("boton_abrir");
var body = document.getElementById("body");
var submenu_movil = document.getElementById("submenu_movil");
var submenu_movil2 = document.getElementById("submenu_movil2");

function desplegarsubmenu(){
    const submenuVisible = submenu_movil.classList.contains("visible");

    if(submenuVisible){
        submenu_movil.classList.remove("visible");
    } else{
        submenu_movil.classList.add("visible");
    }
}

function desplegarsubmenu2(){
    const submenuVisible2 = submenu_movil2.classList.contains("visible");

    if(submenuVisible2){
        submenu_movil2.classList.remove("visible");
    } else{
        submenu_movil2.classList.add("visible");
    }
}

function abrir_modal_responsive() {
    const menuVisible = menuDesplegable.classList.contains("visible");

    if (menuVisible) {
        icono_modal.classList.replace('fa-xmark', 'fa-bars');
        menuDesplegable.classList.remove("visible");
        body.style.overflow = "";
    } else {
        icono_modal.classList.replace('fa-bars', 'fa-xmark');
        menuDesplegable.classList.add("visible");
        body.style.overflow = "hidden";
        submenu_movil.classList.remove("visible");
        submenu_movil2.classList.remove("visible");
    }
}



const elements = document.querySelectorAll('.fade-in');

function applyEffect(element) {
    if (element.classList.contains('posicion_1')) {
        element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        element.style.transform = "scale(1.2) translateY(0)";
    } else if (element.classList.contains('posicion_2')) {
        element.style.transition = "opacity 0.6s ease-out, transform 0.8s ease-out";
        element.style.transform = "scale(1.4) translateY(0)"; 
    } else if (element.classList.contains('posicion_3')) {
        element.style.transition = "opacity 0.6s ease-out, transform 0.7s ease-out";
        element.style.transform = "scale(1.1) translateY(0)"; 
    } else if (element.classList.contains('posicion_4')) {
        element.style.transition = "opacity 0.6s ease-out, transform 0.9s ease-out";
        element.style.transform = "scale(1.6) translateY(0)"; 
    }
}

function checkVisibility() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('visible'); 
            applyEffect(element); 
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();


var contenedor_modal = document.querySelector('.contenedor_modal_pedir_cita');
var modal = document.querySelector('.modal_contenido');

function mostrarModal() {
   
    if (!contenedor_modal.classList.contains('mostrar')) {
        contenedor_modal.classList.add('mostrar'); // Añadir la clase para mostrar
        modal.classList.add('mostrar');
    }
}

function cerrarModal() {
    if (contenedor_modal.classList.contains('mostrar')) {
        contenedor_modal.classList.remove('mostrar'); // Añadir la clase para mostrar
        modal.classList.remove('mostrar');
    }
}

function ubicacionAlcala() {
    window.location.href = "https://reservas.koibox.cloud/depisana?ref=web";
}

function ubicacionMadrid() {
   
    window.location.href = "https://reservas.koibox.cloud/depisana-nuevos-ministerios?ref=web";
}


class Clinica {
    constructor(nombre, direccion, maps, ciudad, telefono, whatsapp, telefonoHref, whatsappHref) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.maps = maps;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.whatsapp = whatsapp;
        this.telefonoHref = telefonoHref;
        this.whatsappHref = whatsappHref;
    }
}

const DepisanaAlcala = new Clinica(
    "Depisana Alcalá",
    "Av. de Lope de Figueroa, 35",
    "https://maps.app.goo.gl/zVecK2jguQ2ntTyGA",
    "Alcalá de Henares",
    "650 22 44 72",
    "650 22 44 72",
    "tel:650224472", 
    "https://wa.me/34650224472"
);

const DepisanaMadrid = new Clinica(
    "Depisana Madrid - Nuevos Ministerios", 
    "C. de María de Guzmán, 55", 
    "https://maps.app.goo.gl/56k2WXWsGTafGoYZ6",
    "Madrid", 
    "638 18 65 94", 
    "638 18 65 94", 
    "tel:638186594", 
    "https://wa.me/34638186594"
);


const selectorClinica = document.getElementById('selectorClinica');
const direccion = document.getElementById('direccion');
const ciudad = document.getElementById('ciudad');
const whatsapp = document.getElementById('whatsapp');
const telefono = document.getElementById('telefono');
const mapsHref = document.querySelector('a[href="https://maps.app.goo.gl/zVecK2jguQ2ntTyGA"]');
const telefonoHref = document.querySelector('a[href="tel:650224472"]');
const whatsappHref = document.querySelector('a[href="https://wa.me/34650224472"]');


function actualizarInformacion(clinica) {
    direccion.textContent = clinica.direccion;
    ciudad.textContent = `(${clinica.ciudad})`;
    whatsapp.textContent = clinica.whatsapp;
    telefono.textContent = clinica.telefono;
    mapsHref.href = clinica.maps;
    telefonoHref.href = clinica.telefonoHref;
    whatsappHref.href = clinica.whatsappHref;
}

function actualizarInformacionContacto() {
    const selectorClinica = document.getElementById('selectorClinica');
    const selectedClinica = selectorClinica.value; 
    if (selectedClinica === 'alcala') {
        actualizarInformacion(DepisanaAlcala);
    } else if (selectedClinica === 'madrid') {
        actualizarInformacion(DepisanaMadrid);
    }
}

const enlaces  = document.querySelectorAll('.card_galeria img');     
const lightbox = document.querySelector('.lightbox');
const grande   = document.querySelector('.grande');
const cerrar   = document.querySelector('.cerrar');
const fondo = document.querySelector('.contenedor_seccion_fotos')

enlaces.forEach((cadaEnlace) => {
    cadaEnlace.addEventListener('click', (e) => {
        e.preventDefault();
        let ruta = cadaEnlace.src; 
        console.log(ruta); 
        fondo.classList.add('activo');
        lightbox.classList.add('activo');
        grande.setAttribute('src', ruta);
    });
});

cerrar.addEventListener('click', () => {
    lightbox.classList.remove('activo');
    fondo.classList.remove('activo')
});
