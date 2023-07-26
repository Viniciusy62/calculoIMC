import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const btnIMC = document.querySelector("#btn-IMC");

const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.addEventListener("input", AlertError.validate);
inputHeight.addEventListener("input", AlertError.validate);

function calcIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function notNumber(value) {
  return isNaN(value) || value == ""
}

function alertIMC(e) {
  e.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  const calc = calcIMC(weight, height)

  if (showAlertError) {
    AlertError.open();
    
    inputWeight.value = "";
    inputHeight.value = "";
    
    return;
  } 
    AlertError.close();
    
    Modal.open();
    Modal.result.textContent = `Seu IMC é de ${calc}`;
    
    inputWeight.value = "";
    inputHeight.value = "";  
}

btnIMC.addEventListener("click", alertIMC);
