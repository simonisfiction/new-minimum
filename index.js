//************************************************************************/
//     CLASSES 
//************************************************************************/
class FinanceSheet {
  constructor(
    //income related parameters
    income, 
    pensionAndSocialSecurity,
    investmentsAndSavings, 
    otherIncome,
    //***************************** */
    // expense related parameters
    // Housing and utilities
    mortgage,
    propertyTax,
    rent,
    rentalHomeInsurance,
    hoaCoOp,
    homeMaintenance,
    utilities,
    // transportation
    autoLoan,
    autoInsurance,
    gasoline,
    autoMaintenance,
    parkingAndTolls,
    otherTransportCosts,
    // Other Debt & Loan Payments
    creditCard,
    studentLoan,
    otherLoansAndLiabilities,
    // <h2>Living Expenses</h2>
    groceryBudget,
    clothing,
    houseSupplies,
    mealsOut,
    otherLivingExpenses,
    // <h2>Healthcare</h2>
    medicalInsurance,
    medicalSpending,
    // <h2>Children & Education</h2>
    childAndPersonalCare,
    tuitionAndSupplies,
    childSupport,
    otherChildSpending,
    // <h2>Savings & Investments</h2>
    _401k,
    ira,
    rothIra,
    collegeSaving,
    carSaving,
    emergencyFund,
    // <h2>Miscelaneous Expenses</h2>
    pet,
    gifts,
    hobbies,
    entertainmentAndTickets,
    travelAndVacation,
    otherMiscExpenses

    ){
    // income related data members
    this.income = income;
    this.pensionAndSocialSecurity = pensionAndSocialSecurity;
    this.investmentsAndSavings = investmentsAndSavings;
    this.otherIncome = otherIncome;
    // expense related data members
    this.mortgage = mortgage;
    this.propertyTax = propertyTax;
    this.rent = rent;
    this.rentalHomeInsurance = rentalHomeInsurance;
    this.hoaCoOp = hoaCoOp;
    this.homeMaintenance = homeMaintenance;
    this.utilities = utilities;
    // transportation
    this.autoLoan = autoLoan;
    this.autoInsurance = autoInsurance;
    this.gasoline = gasoline;
    this.autoMaintenance = autoMaintenance;
    this.parkingAndTolls = parkingAndTolls;
    this.otherTransportCosts = otherTransportCosts;
    // Other Debt & Loan Payments
    this.creditCard = creditCard;
    this.studentLoan = studentLoan;
    this.otherLoansAndLiabilities = otherLoansAndLiabilities;
    // <h2>Living Expenses</h2>
    this.groceryBudget = groceryBudget;
    this.clothing = clothing;
    this.houseSupplies = houseSupplies;
    this.mealsOut = mealsOut;
    this.otherLivingExpenses = otherLivingExpenses;
    // <h2>Healthcare</h2>
    this.medicalInsurance = medicalInsurance;
    this.medicalSpending = medicalSpending;
    // <h2>Children & Education</h2>
    this.childAndPersonalCare = childAndPersonalCare;
    this.tuitionAndSupplies = tuitionAndSupplies;
    this.childSupport = childSupport;
    this.otherChildSpending = otherChildSpending;
    // <h2>Savings & Investments</h2>
    this._401k = _401k;
    this.ira = ira;
    this.rothIra = rothIra;
    this.collegeSaving = collegeSaving;
    this.carSaving = carSaving;
    this.emergencyFund = emergencyFund;
    // <h2>Miscelaneous Expenses</h2>
    this.pet = pet;
    this.gifts = gifts;
    this.hobbies = hobbies;
    this.entertainmentAndTickets = entertainmentAndTickets;
    this.travelAndVacation = travelAndVacation;
    this.otherMiscExpenses = otherMiscExpenses;



    this.monthlyProfit = 0;
    this.calculateMonthlyProfit();
  }
  printFinanceSheet(){
    console.log(`\nFINANCES\n`);
    console.log(`------------------------------\n`);
    console.log(`| INCOME SOURCES     `);
    console.log(`------------------------------\n`);
    //income related parameters
    console.log(`| income                       | ${this.income}\n`);
    console.log(`| Pension & social security    | ${this.pensionAndSocialSecurity}\n`);
    console.log(`| Investments & savings        | ${this.investmentsAndSavings}\n`);
    console.log(`| Other income                 | ${this.otherIncome}\n`);
    //***************************** */
    // expense related parameters
    console.log(`------------------------------\n`);
    console.log(`| EXPENSES      `);
    console.log(`------------------------------\n`);
    // Housing and utilities
    console.log(`| Mortgage                     | ${this.mortgage}\n`);
    console.log(`| Property tax                 | ${this.propertyTax}\n`);
    console.log(`| Rent                         | ${this.rent}\n`);
    console.log(`| Rental or home insurance     | ${this.rentalHomeInsurance}\n`);
    console.log(`| HOA or Co-op| ${this.hoaCoOp}\n`);
    console.log(`| Home maintenance             | ${this.homeMaintenance}\n`);
    console.log(`| Utilities                    | ${this.utilities}\n`);
    // transportation
    console.log(`| Auto loan                    | ${this.autoLoan}\n`);
    console.log(`| Auto insurance               | ${this.autoInsurance}\n`);
    console.log(`| Gasoline                     | ${this.gasoline}\n`);
    console.log(`| Auto maintenance             | ${this.autoMaintenance}\n`);
    console.log(`| Parking and tolls            | ${this.parkingAndTolls}\n`);
    console.log(`| Other transport costs        | ${this.otherTransportCosts}\n`);
    // Other Debt & Loan Payments
    console.log(`| Credit card                  | ${this.creditCard}\n`);
    console.log(`| Student loan                 | ${this.studentLoan}\n`);
    console.log(`| Other loans & liabilities    | ${this.otherLoansAndLiabilities}\n`);
    // <h2>Living Expenses</h2>
    console.log(`| Grocery budget               | ${this.groceryBudget}\n`);
    console.log(`| Clothing                     | ${this.clothing}\n`);
    console.log(`| House supplies               | ${this.houseSupplies}\n`);
    console.log(`| Meals out                    | ${this.mealsOut}\n`);
    console.log(`| Other living expenses        | ${this.otherLivingExpenses}\n`);
    // <h2>Healthcare</h2>
    console.log(`| Medical insurance            | ${this.medicalInsurance}\n`);
    console.log(`| Medical spending             | ${this.medicalSpending}\n`);
    // <h2>Children & Education</h2>
    console.log(`| Child & personal care        | ${this.childAndPersonalCare}\n`);
    console.log(`| Tuition & supplies           | ${this.tuitionAndSupplies}\n`);
    console.log(`| Child support                | ${this.childSupport}\n`);
    console.log(`| Other child spending         | ${this.otherChildSpending}\n`);
    // <h2>Savings & Investments</h2>
    console.log(`| 401k                         | ${this._401k}\n`);
    console.log(`| IRA                          | ${this.ira}\n`);
    console.log(`| Roth IRA                     | ${this.rothIra}\n`);
    console.log(`| College saving               | ${this.collegeSaving}\n`);
    console.log(`| Car saving                   | ${this.carSaving}\n`);
    console.log(`| Emergency fund               | ${this.emergencyFund}\n`);
    // <h2>Miscelaneous Expenses</h2>
    console.log(`| Pet                          | ${this.pet}\n`);
    console.log(`| Gifts                        | ${this.gifts}\n`);
    console.log(`| Hobbies                      | ${this.hobbies}\n`);
    console.log(`| Entertainment & tickets      | ${this.entertainmentAndTickets}\n`);
    console.log(`| Travel & vacations           | ${this.travelAndVacation}\n`);
    console.log(`| Other miscelaneous expenses  | ${this.otherMiscExpenses}\n`);

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



