import Design from "./design.js"
import Calculation from "./calculation.js"
import { Modal } from "./modal.js"
import { Alert } from "./alert-error.js"

const design = Design()
const calculation = Calculation()

const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const form = document.querySelector("form")

window.addEventListener("input", Alert.close)

form.addEventListener("submit", (e) => {
   e.preventDefault()
      
   const fillField = calculation.notANumber(inputWeight.value) || 
      calculation.notANumber(inputHeight.value)

   if(calculation.negativeInputValue(
   inputWeight.value, inputHeight.value)) {
      Alert.open()
      return

   } else if(fillField) {
      Alert.element.innerText = 
      "Please, enter a number in the fields below"
      Alert.open()
      return
   }

   const result = 
      calculation.calculateBMI(inputWeight.value, inputHeight.value)
   Modal.message.innerText = `Your BMI is ${result}`
   Modal.modalToggle()
   inputWeight.value = ""
   inputHeight.value = ""
})





