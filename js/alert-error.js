export { AlertError }

const AlertError = {
  errorMsg: document.querySelector(".error"),
  open() {
    AlertError.errorMsg.classList.add("open");
  },
  close() {
    AlertError.errorMsg.classList.remove("open");
  },
  
  validate(e) {
    const value = e.target.value
  
    if(isNaN(value) || value < 0) {
      AlertError.errorMsg.classList.add("open");
    } else {
      AlertError.errorMsg.classList.remove("open");
    }
  }
}

