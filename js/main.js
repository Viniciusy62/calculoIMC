import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber } from "./utils.js";

const btnIMC = document.querySelector("#btn-IMC");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.addEventListener("input", AlertError.validate);
inputHeight.addEventListener("input", AlertError.validate);

function alertIMC(e) {
  e.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  const resultCalc = calculateIMC(weight, height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();

    inputWeight.value = "";
    inputHeight.value = "";

    return;
  }
  AlertError.close();
  displayResultMessage(resultCalc)
}

function displayResultMessage(result) {
  const textResult = `Seu IMC é de ${result}`;
  Modal.result.textContent = textResult
  Modal.open();

  inputWeight.value = "";
  inputHeight.value = "";
}

btnIMC.addEventListener("click", alertIMC);
