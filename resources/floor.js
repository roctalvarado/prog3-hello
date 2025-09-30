// DOM -> Document Object Model
// Evento que se dispara cuando se termina de cargal el DOM
document.addEventListener("DOMContentLoaded", function(){

    function getValues(){
        var length = parseFloat(document.getElementById("input-length").value);
        var width = parseFloat(document.getElementById("input-width").value);
        var price = parseFloat(document.getElementById("input-price").value);

        if (isNaN(length) || isNaN(width) || isNaN(price)) {
            alert("Introduce solamente valores numéricos");
            // Console son mensajes para el desarrollador
            console.error("El usuario ingresó un valor inválido");
            return;
        }

        return [length, width, price];
    }

    function calculateArea(length, width){
        return (length * 100) * (width * 100);
    }

    function calculateQuantity(floorArea, tileArea){
        return floorArea / tileArea;
    }
    
    function calculatePrice(tileQuantity, tilePrice){
        return tileQuantity * tilePrice;
    }

    // Area del azulejo
    var tileArea = 625;

    // Variable del botón para calcular
    var btnCalculate = document.getElementById("btn-calculate");

    btnCalculate.addEventListener("click", function() {

        // Valores
        var [length, width, price] = getValues();

        var floorArea = calculateArea(length, width);
        var tileQuantity = calculateQuantity (floorArea, tileArea);
        var totalPrice = calculatePrice(tileQuantity, price)

        alert("Superficie total por cubrir: " + floorArea + " cm^2" +
            "\nCantidad de azulejos necesarios: " + tileQuantity + " azulejos" +
            "\nPrecio total de azulejos necesarios: $" + totalPrice + " MXN"
        )
    })

})