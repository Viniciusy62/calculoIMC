export { Modal}
// Object Literal
const Modal = {
  alertClose: document.querySelector(".modal-wrapper"),
  alert: document.querySelector(".modal-wrapper"),
  result: document.querySelector("#result"),
  btnClose: document.querySelector("#btn-close"),

  open() {
    Modal.alert.classList.add("open");
  },
  close() {
    Modal.alertClose.classList.remove("open");
  }
}

Modal.btnClose.addEventListener("click", Modal.close);

window.addEventListener("keydown", closeKeydown)

function closeKeydown(event) {
  if(event.key  === "Escape") {
    Modal.close();
  }
}