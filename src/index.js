import validator from './validator.js';

// console.log(validator);
const numeroTarjeta = document.getElementById("cardnumber"); //input
numeroTarjeta.addEventListener("keyup", enmascarar);
numeroTarjeta.addEventListener("keypress", validarTipoNumero);
numeroTarjeta.addEventListener("keydown", ajustandoDigitos);

const botonValidar = document.getElementById("botonValidar");
botonValidar.addEventListener("click", validate);

const botonComprar1 = document.getElementById("botonComprar1");
botonComprar1.addEventListener("click", pantalla);

const botonComprar2 = document.getElementById("botonComprar2");
botonComprar2.addEventListener("click", pantalla);

const botonComprar3 = document.getElementById("botonComprar3");
botonComprar3.addEventListener("click", pantalla);

let valorOriginal = '';


function pantalla() {
  document.getElementById("container").style.display = "none";
  document.getElementById("pantallaDeCardValidation").style.display = "block";
}

function validarTipoNumero(event) {
  const numeroPresionado = String(event.key);

  if (isNaN(numeroPresionado)) {
    event.preventDefault();
  } else {
    if (valorOriginal.length < 16) {
      // guardando el valor original
      valorOriginal = valorOriginal + numeroPresionado;
    }
  }
}

function enmascarar() {
  numeroTarjeta.value = validator.maskify(numeroTarjeta.value)
  if (numeroTarjeta.value.length === 0) {
    valorOriginal = ''
  }
}

function ajustandoDigitos(event) {
  if (event.key === "Backspace") {
    valorOriginal = valorOriginal.slice(0, -1);
  }
}

function validate() {
  const valid = validator.isValid(valorOriginal);

  if (valorOriginal === "") {
    alert("por favor, ingrese numero de tarjeta");
  }

  if (valid) {

    document.getElementById("tarjetaValida").innerHTML = "La tarjeta ingresada es valida.";
  }
  else {
    document.getElementById("tarjetaValida").innerHTML = "La tarjeta ingresada no es valida.";

  }
}