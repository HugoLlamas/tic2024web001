var btnCreditos = document.getElementById("btnCreditos");







var btnOcultar = document.getElementById("btnOcultar");







var btnMostrar = document.getElementById("btnMostrar");







var btnCambiarColor = document.getElementById("btnCambiarColor");















var seccion1 = document.querySelector(".bloque-dorado");















btnCreditos.addEventListener("click", function() {







    alert("Autor: Hugo Llamas Iglesias\nCurso y Grupo: 2º BACHILLERATO Nº18");







});















btnOcultar.addEventListener("click", function() {







    seccion1.style.display = "none";







});















btnMostrar.addEventListener("click", function() {







    seccion1.style.display = "block";







});















btnCambiarColor.addEventListener("click", function() {







    



    var nuevoColor = obtenerColorAleatorio();







    seccion1.style.backgroundColor = nuevoColor;







});















function obtenerColorAleatorio() {







    







    return '#' + Math.floor(Math.random()*16777215).toString(16);







}







var seccion1 = document.querySelector(".bloque-dorado");



var seccion2 = document.querySelector(".bloque-gris");











seccion1.addEventListener("mouseover", function() {



    var fechaActual = new Date();



    alert("Fecha actual: " + fechaActual);



});











seccion2.addEventListener("mouseover", function() {



   



    seccion2.style.backgroundColor = obtenerColorAleatorio();



});







seccion2.addEventListener("mouseout", function() {



    



    seccion2.style.backgroundColor = "silver";



});

var btnUbicacion = document.getElementById("btnUbicacion");



btnUbicacion.addEventListener("click", function() {

    obtenerUbicacion();

});



function obtenerUbicacion() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {

            var latitud = position.coords.latitude;

            var longitud = position.coords.longitude;



            alert("Latitud: " + latitud + "\nLongitud: " + longitud);

        }, function(error) {

            alert("Error al obtener la ubicación: " + error.message);

        });

    } else {

        alert("La geolocalización no está soportada por tu navegador.");

    }

}



var btnUbicacion = document.getElementById("btnUbicacion");

var ubicacionTexto = document.getElementById("ubicacionTexto");

var mapaDiv = document.getElementById("mapa");



btnUbicacion.addEventListener("click", function() {

    obtenerUbicacion();

});



function obtenerUbicacion() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {

            var latitud = position.coords.latitude;

            var longitud = position.coords.longitude;



            // Mostrar latitud y longitud

            ubicacionTexto.textContent = "Latitud: " + latitud + ", Longitud: " + longitud;



            // Mostrar mapa

            mostrarMapa(latitud, longitud);

        }, function(error) {

            alert("Error al obtener la ubicación: " + error.message);

        });

    } else {

        alert("La geolocalización no está soportada por tu navegador.");

    }

}



function mostrarMapa(latitud, longitud) {

    // Inicializar el mapa con Leaflet

    var mymap = L.map('mapa').setView([latitud, longitud], 15);



    // Agregar el mapa base de OpenStreetMap

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

        attribution: '© OpenStreetMap contributors'

    }).addTo(mymap);



    // Agregar un marcador en la ubicación

    L.marker([latitud, longitud]).addTo(mymap)

        .bindPopup('¡Aquí estoy yo!')

        .openPopup();

}