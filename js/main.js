import { Modal } from './modal.js';

const btnIMC = document.querySelector("#btn-IMC");

const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const errorMsg = document.querySelector(".error");

function validate(e) {
  const value = e.target.value

  if(isNaN(value)) {
    errorMsg.classList.add("open");
  } else {
    errorMsg.classList.remove("open");
  }
}

weight.addEventListener("input", validate)
height.addEventListener("input", validate)

function calcIMC() {
  let calc = (weight.value / (height.value / 100) ** 2).toFixed(2);
  
  return calc;
}

function alertIMC(e) {
  e.preventDefault();

  if(isNaN(calcIMC())) {
    errorMsg.classList.add("open");
  } else {
    errorMsg.classList.remove("open");

    Modal.open()
    Modal.result.innerHTML = `<h1>Seu IMC é de ${calcIMC()}</h1>`;
  }
  weight.value = ""
  height.value = ""
}

btnIMC.addEventListener("click", alertIMC);

