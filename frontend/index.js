





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
let financeForm = document.forms["my-form"];
if(financeForm){
  financeForm.addEventListener("submit", getFinanceValues);
}

function getFinanceValues(event){
  event.preventDefault();
  let newFinanceSheet = new FinanceSheet(
    parseFloat(financeForm.income.value), 
    parseFloat(financeForm.pensionAndSocialSecurity.value),
    parseFloat(financeForm.investmentsAndSavings.value), 
    parseFloat(financeForm.otherIncome.value),
    parseFloat(financeForm.incomeTaxRate.value),
    //***************************** */
    // expense related parameters
    // Housing and utilities
    parseFloat(financeForm.mortgage.value),
    parseFloat(financeForm.propertyTax.value),
    parseFloat(financeForm.rent.value),
    parseFloat(financeForm.rentalHomeInsurance.value),
    parseFloat(financeForm.hoaCoOp.value),
    parseFloat(financeForm.homeMaintenance.value),
    parseFloat(financeForm.utilities.value),
    // transportation
    parseFloat(financeForm.autoLoan.value),
    parseFloat(financeForm.autoInsurance.value),
    parseFloat(financeForm.gasoline.value),
    parseFloat(financeForm.autoMaintenance.value),
    parseFloat(financeForm.parkingAndTolls.value),
    parseFloat(financeForm.otherTransportCosts.value),
    // Other Debt & Loan Payments
    parseFloat(financeForm.creditCard.value),
    parseFloat(financeForm.studentLoan.value),
    parseFloat(financeForm.otherLoansAndLiabilities.value),
    // <h2>Living Expenses</h2>
    parseFloat(financeForm.groceryBudget.value),
    parseFloat(financeForm.clothing.value),
    parseFloat(financeForm.houseSupplies.value),
    parseFloat(financeForm.mealsOut.value),
    parseFloat(financeForm.otherLivingExpenses.value),
    // <h2>Healthcare</h2>
    parseFloat(financeForm.medicalInsurance.value),
    parseFloat(financeForm.medicalSpending.value),
    // <h2>Children & Education</h2>
    parseFloat(financeForm.childAndPersonalCare.value),
    parseFloat(financeForm.tuitionAndSupplies.value),
    parseFloat(financeForm.childSupport.value),
    parseFloat(financeForm.otherChildSpending.value),
    // <h2>Savings & Investments</h2>
    parseFloat(financeForm._401k.value),
    parseFloat(financeForm.ira.value),
    parseFloat(financeForm.rothIra.value),
    parseFloat(financeForm.collegeSaving.value),
    parseFloat(financeForm.carSaving.value),
    parseFloat(financeForm.emergencyFund.value),
    // <h2>Miscelaneous Expenses</h2>
    parseFloat(financeForm.pet.value),
    parseFloat(financeForm.gifts.value),
    parseFloat(financeForm.hobbies.value),
    parseFloat(financeForm.entertainmentAndTickets.value),
    parseFloat(financeForm.travelAndVacation.value),
    parseFloat(financeForm.otherMiscExpenses.value),
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0
  )
  
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


// **********************************************************************
//        TEST VALUES
// **********************************************************************
let testButton = document.getElementById("testValues");
if(testButton){
  testButton.addEventListener("click", fillTestValues);
}

function fillTestValues(event){
  event.preventDefault();
  let testSignupForm = new FinanceSheet(
    // income
    45769, 0, 0, 0, 6,
    // expenses
    // housing and utilities
    0, 0, 1100, 12, 0, 0, 140,
    // transportation
    0, 2000, 200, 2000, 0, 0,
    // other debt and loan repayments
    0, 0, 0,
    // living expenses
    300, 50, 20, 80, 50,
    // healthcare
    89, 0,
    // children and education
    0, 0, 0, 0,
    // savings and investment
    0, 0, 400, 1200, 100, 100,
    // miscelaneous Expenses
    0, 1000, 72, 100, 0, 0
    )
  document.getElementById("i ncome").value = testSignupForm.income;
}



