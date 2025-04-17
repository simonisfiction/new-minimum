//************************************************************************/
//     CLASSES 
//************************************************************************/

class User {
  constructor(email, password){
    this.email = email.value;
    this.password = password.value;
  }
  greet() {
    console.log(`Hi, i exist now, and my email is: ${this.email}`);
  }
}


//************************************************************************/
//     PAGE FUNCTCIONALITY
//************************************************************************/

// Finance form
let form = document.forms["my-form"];
if(form){
  form.addEventListener("submit", getValues);
}

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


// signup form
let signupForm = document.forms["signup-form"];
if(signupForm){
  signupForm.addEventListener("submit", handleSignup);
}

function handleSignup(event){
  event.preventDefault();

  let newUser = new User(signupForm.email, signupForm.password)
  newUser.greet();

}



