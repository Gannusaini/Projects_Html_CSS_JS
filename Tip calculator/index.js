const billInput = document.getElementById("Bills");//corrected id to "Bills"
const tipInput = document.getElementById("Tip");//corrected id to "Tip"
const calculateButton = document.getElementById("Calculate");//corrected id to "Calculate"
const totalDisplay = document.getElementById("total");//corrected id to "total"


calculateButton.addEventListener("click", function() {//corrected "Calculat" to "Calculate"

    const billAmount = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);

    const tipAmount = billAmount * (tipPercentage / 100);

    const totalAmount = billAmount + tipAmount;

    totalDisplay.textContent = totalAmount.toFixed(2);
});
