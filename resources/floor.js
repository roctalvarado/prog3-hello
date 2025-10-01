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

    function calculateTileArea(tileLength, tileWidth){
        return tileLength * tileWidth;
    }

    function calculateFloorArea(floorLength, floorWidth){
        return (floorLength * 100) * (floorWidth * 100);
    }

    function calculateQuantity(floorArea, tileArea){
        return floorArea / tileArea;
    }
    
    function calculatePrice(tileQuantity, tilePrice){
        return tileQuantity * tilePrice;
    }

    // Area del azulejo
    var tileArea = calculateTileArea(25, 25);

    // Variable del botón para calcular
    var btnCalculate = document.getElementById("btn-calculate");

    // Variable del contenido del párrafo
    var resultParagraph = document.getElementById("paragraph-result");

    btnCalculate.addEventListener("click", function() {

        // Valores
        var [floorLength, floorWidth, tilePrice] = getValues();

        var floorArea = calculateFloorArea(floorLength, floorWidth);
        var tileQuantity = calculateQuantity (floorArea, tileArea);
        var totalPrice = calculatePrice(tileQuantity, tilePrice)

        var resultText = "<strong>Superficie total por cubrir: </strong>" + floorArea + " cm^2" +
            "<br><strong>Cantidad de azulejos necesarios: </strong>" + tileQuantity + " azulejos" +
            "<br><strong>Precio total de azulejos necesarios: </strong>$" + totalPrice + " MXN"

        // Muestra el texto en el párrafo
        // innerHTML -> Interpreta código HTML (en este caso, el salto de línea <br> y el texto en negritas <strong></strong>)
        resultParagraph.innerHTML = resultText;
    })

})