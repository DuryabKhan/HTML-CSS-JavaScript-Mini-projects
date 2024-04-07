const btn = document.getElementById("calculate");
const billAmount = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const total = document.getElementById("total");

function calculateTotal() {
  const billValue = billAmount.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerText = totalValue.toFixed(2);
}

btn.addEventListener("click", calculateTotal);
