const btnIMC = document.querySelector("#btn-IMC");
const btnClose = document.querySelector("#btn-close")

function calcIMC(weight, height) {
  weight = document.querySelector("#weight")
  height = document.querySelector("#height")
  let calc = parseInt(weight.value / ((height.value / 100) ** 2))
  
  return calc
}

function error() {
  console.log("Error")
}

function closeScreen() {
  
  console.log("Fechar tela")
}

function alertIMC(e) {
  e.preventDefault()

  const result = document.querySelector("#info")
  result.style.display = "block"
  
  return result.innerHTML = `<h1>Seu IMC é de ${calcIMC()}</h1>`
}

btnIMC.addEventListener("click", alertIMC)
btnClose.addEventListener("click", closeScreen)