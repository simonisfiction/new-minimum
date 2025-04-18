//************************************************************************/
//     CLASSES 
//************************************************************************/
class FinanceSheet {
  constructor(income, rent, groceryBudget){
    this.income = income;
    this.rent = rent;
    this.groceryBudget = groceryBudget;
    this.monthlyProfit = 0;
    this.calculateMonthlyProfit();
  }
  printFinanceSheet(){
    console.log(`\nFinances\n`);
    console.log(`------------------------------\n`);
    console.log(`| Income             | ${this.income} \n`);
    console.log(`| Rent               | ${this.rent}\n`);
    console.log(`| Grocery Budget     | ${this.groceryBudget}\n`);
    console.log(`| Monthly profit:    | ${this.monthlyProfit}\n`);

  }
  calculateMonthlyProfit(){
    this.monthlyProfit = parseFloat(this.income) - parseFloat(this.rent) - parseFloat(this.groceryBudget);
    
    let out = `<p>Money left over: ${this.monthlyProfit.toFixed(2)}</p>`;
    document.querySelector(".out").innerHTML = out;
  }
}

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
  let newFinanceSheet = new FinanceSheet(form.income.value, form.rent.value, form.groceryBudget.value)
  newFinanceSheet.calculateMonthlyProfit();
  newFinanceSheet.printFinanceSheet();
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



