export const Modal = {
   modalWrapper: document.querySelector(".modal-wrapper"),
   btnClose: document.querySelector(".btnClose"),
   message: document.querySelector(".card.modal span"),

   modalToggle() {
      Modal.modalWrapper.classList.toggle("open")
   }
}

Modal.btnClose.addEventListener("click", Modal.modalToggle)

window.addEventListener("keydown", removeClassOpen)

function removeClassOpen(e) {
   if(e.key === "Escape" 
   && 
   Modal.modalWrapper.classList.contains("open")) {
      Modal.modalToggle()
   }
}
