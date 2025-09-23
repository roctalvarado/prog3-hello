// DOM -> Document Object Model
// Evento que se dispara cuando se termina de cargal el DOM
document.addEventListener("DOMContentLoaded", function(){

    // Declaramos una variable en JavaScript (var) que representa el botón "btn-ok" en el archivo HTML
    var btnOK = document.getElementById("btn-ok");
    // Declaramos un evento click a ese botón
    btnOK.addEventListener("click", function() {

        // Declaramos una variable que representa el input del HTML
        var name = document.getElementById("input-name");

        // Mostramos una alerta del navegador con el contenido del input
        alert("Hello World " + name.value);
    })
})