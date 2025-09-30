// DOM -> Document Object Model
// Evento que se dispara cuando se termina de cargal el DOM
document.addEventListener("DOMContentLoaded", function(){
    
    function getNumbers() {
        // Aquí agarramos el valor (o contenido) del la caja de texto input
        // El cual retorna un tipo string
        var value1 = document.getElementById("input-value1").value;
    
        // Transforma el valor de la caja de texto a tipo float
        var value1Number = parseFloat(value1);

        // En una sola línea obtiene el valor del inpurt y lo transforma a float
        var value2Number = parseFloat(document.getElementById("input-value2").value);

        return [value1Number, value2Number];
    }

    function operation(value1, value2, type) {
        /*
        1 Suma
        2 Resta
        3 Multiplicación
        4 División
        */
        if (type == 1) {
            return value1 + value2;
        } else if (type == 2) {
            return value1 - value2;
        } else if (type == 3) {
            return value1 * value2;
        } else if (type == 4) {
            return value1 / value2;
        }
    }
    
    function validarYOperar(tipoOperacion) {
        var [value1, value2] = getNumbers();

        // isNaN: is not a number
        if (isNaN(value1) || isNaN(value2)) {
            // Alert es un mensaje para el usuario
            alert("Introduce solamente valores numéricos");
            // Console son mensajes para el desarrollador
            console.error("El usuario ingresó un valor inválido");
            return;
        }

        var result = operation(value1, value2, tipoOperacion)
        alert("El resultado es: " + result);
    }

    // Declaramos una variable en JavaScript (var) que representa el botón "btn-sumar" en el archivo HTML
    // var btnSumar = document.getElementById("btn-sumar");
    // Declaramos un evento click a ese botón

    document.getElementById("btn-sumar").addEventListener("click", function() {
        validarYOperar(1); // 1 = Suma
    });

    document.getElementById("btn-restar").addEventListener("click", function() {
        validarYOperar(2); // 2 = Resta
    });

    document.getElementById("btn-multiplicar").addEventListener("click", function() {
        validarYOperar(3); // 3 = Multiplicación
    });

    document.getElementById("btn-dividir").addEventListener("click", function() {
        validarYOperar(4); // 4 = División
    })
})