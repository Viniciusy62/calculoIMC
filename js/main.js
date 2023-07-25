import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const btnIMC = document.querySelector("#btn-IMC");

const weight = document.querySelector("#weight");
const height = document.querySelector("#height");

weight.addEventListener("input", AlertError.validate);
height.addEventListener("input", AlertError.validate);

function calcIMC() {
  let calc = (weight.value / (height.value / 100) ** 2).toFixed(2);

  return calc;
}

function alertIMC(e) {
  e.preventDefault();

  if (isNaN(calcIMC()) || calcIMC() < 0) {
    AlertError.open();
  } else {
    AlertError.close();

    Modal.open();
    Modal.result.textContent = `Seu IMC é de ${calcIMC()}`;
  }
  weight.value = "";
  height.value = "";
}

btnIMC.addEventListener("click", alertIMC);
