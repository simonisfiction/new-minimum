//*****      CLASSES     ****************/

class User {
  constructor(email, password){
    this.email = email;
    this.password = password;
  }
  greet() {
    console.log("Hi, i exist now, and my email is: ${this.email}");
  }
}



//*****     PAGE FUNCTCIONALITY **************/

let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

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

let signupForm = document.forms["signup-form"];
signupForm.addEventListener("submit", getValues);
let newUser = new User()


