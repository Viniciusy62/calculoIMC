const btnIMC = document.querySelector("#btn-IMC");
const btnClose = document.querySelector("#btn-close");
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
  let calc = parseInt(weight.value / (height.value / 100) ** 2);
  
  return calc;
}


function closeScreen() {
  const modalAlertClose = document.querySelector(".modal-wrapper");
  modalAlertClose.classList.remove("open");
}


function alertIMC(e) {
  e.preventDefault();

  const modalAlert = document.querySelector(".modal-wrapper");
  const result = document.querySelector("#result");

  if(isNaN(calcIMC())) {
    errorMsg.classList.add("open");
  } else {
    errorMsg.classList.remove("open");

    modalAlert.classList.add("open");
    result.innerHTML = `<h1>Seu IMC é de ${calcIMC()}</h1>`;
    console.log(calcIMC())
  }
  weight.value = ""
  height.value = ""
}

btnIMC.addEventListener("click", alertIMC);
btnClose.addEventListener("click", closeScreen);
