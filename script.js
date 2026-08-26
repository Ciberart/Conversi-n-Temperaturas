const Temperatura = document.getElementById("temperatura");
const botonConvertir = document.getElementById("botonConvertir");
const mensaje = document.getElementById("mensaje");
const resultadoKelvin = document.getElementById("kelvin");
const resultadoFahrenheit = document.getElementById("fahrenheit");

botonConvertir.addEventListener("click", function () {
    let datoIngresado = Temperatura.value.trim();
    if (datoIngresado === "" || isNaN(datoIngresado)) {
        mensaje.textContent = "Error. Ingresa un numero valido";
        resultadoKelvin.textContent = "";
        resultadoFahrenheit.textContent = "";
        Temperatura.focus();
    } else {
        let celsius = Number(datoIngresado);
        let kelvin = celsius + 273.15;
        let fahrenheit = (celsius * 9 / 5) + 32;
        mensaje.textContent = "";
        resultadoKelvin.textContent =
            "Grados Kelvin: " + Number(kelvin.toFixed(2));
        resultadoFahrenheit.textContent =
            "Grados Fahrenheit: " + Number(fahrenheit.toFixed(2));
    }
});