export default function Calculation() {
   
   function calculateBMI(weight, height) {
      return ((weight / (height / 100) ** 2)).toFixed(2)
   }

   function negativeInputValue(weight, height) {
      return weight < 0 || height < 0 
   }

   function notANumber(value) {
      return isNaN(value) || value == ""
   }

   return {
      calculateBMI,
      negativeInputValue,
      notANumber
   }
}