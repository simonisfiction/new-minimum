let form = document.forms["my-form"];
form.addEventListener("submit", getValues);
console.log("\n this is the beginning of the js file");
function getValues(event){
  event.preventDefault();

  let formData = {
    "income": form.income.value,
    "rent": form.rent.value
  }
  let profit = parseFloat(formData.income) - parseFloat(formData.rent);
  console.log(profit);
  let out = `<p>Money left over: ${profit.toFixed(2)}</p>`;

  document.querySelector(".out").innerHTML = out;
}