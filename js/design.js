export default function Design() {
   const btn = document.querySelector("button")

   function increaseButtonOnClick() {
      btn.style.transform = "scale(1.01)";
   }

   function decreaseButtonOnMouseLeave() {
      btn.style.transform = "scale(1)"
   }

   btn.addEventListener("click", increaseButtonOnClick)
   btn.addEventListener("mouseleave", decreaseButtonOnMouseLeave)
}
