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
    otherMiscExpenses,
    // summary
    totalBeforeTaxIncome,
    totalAfterTaxIncome,
    totalExpenses,
    newDiscretionaryIncome,
    newSavingsAndInvestments,

    // daily savings transfers
    rentAndUtilitiesTransfer,
    carInsuranceAndRepairsTransfer,
    carAndSchoolSavingsTransfer,
    iraTransfer,
    emergencyFundTransfer,
    christmasAndBirthdayGiftsTransfer,
    // expense totals
    housingAndUtilities,
    transportation,
    livingExpenses,
    debtAndLoanRepayments,
    healthcare,
    childrenAndEducation,
    savingsAndInvestments,
    miscellaneousExpenses

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

    this.totalBeforeTaxIncome = totalBeforeTaxIncome;
    this.totalAfterTaxIncometotalAfterTaxIncome = totalAfterTaxIncome;
    this.totalExpenses = totalExpenses;
    this.netDiscretionaryIncome = netDiscretionaryIncome;
    this.netSavingsAndInvestments = netSavingsAndInvestments;

    // daily savings transfers
    this.rentAndUtilitiesTransfer = rentAndUtilitiesTransfer;
    this.carInsuranceAndRepairsTransfer = carInsuranceAndRepairsTransfer;
    this.carAndSchoolSavingsTransfer = carAndSchoolSavingsTransfer;
    this.iraTransfer = iraTransfer;
    this.emergencyFundTransfer = emergencyFundTransfer;
    this.christmasAndBirthdayGiftsTransfer = christmasAndBirthdayGiftsTransfer;
    // expense totals
    this.housingAndUtilities = housingAndUtilities;
    this.transportation = transportation;
    this.livingExpenses = livingExpenses;
    this.debtAndLoanRepayments = debtAndLoanRepayments;
    this.healthcare = healthcare;
    this.childrenAndEducation = childrenAndEducation;
    this.savingsAndInvestments = savingsAndInvestments;
    this.miscellaneousExpenses = miscellaneousExpenses; 


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
    console.log(`| HOA or Co-op                 | ${this.hoaCoOp}\n`);
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
    // summary
    console.log(`------------------------------\n`);
    console.log(`| SUMMARY`);
    console.log(`------------------------------\n`);
    console.log(`| Before tax income            | ${this.totalBeforeTaxIncome}\n`);
    console.log(`| After tax income             | ${this.totalAfterTaxIncome}\n`);
    console.log(`| Total Expenses               | ${this.totalExpenses}\n`);
    console.log(`| Net discretionary income     | ${this.netDiscretionaryIncome}\n`);
    console.log(`| Net savings & inversments    | ${this.netSavingsAndInvestments}\n`);

    // daily savings transfers
    console.log(`------------------------------\n`);
    console.log(`| DAILY SAVINGS TRANSFERS`);
    console.log(`------------------------------\n`);
    console.log(`| rent and utilities           | ${this.rentAndUtilitiesTransfer}\n`);
    console.log(`| car insurance                | ${this.carInsuranceAndRepairsTransfer}\n`);
    console.log(`| car & school savings         | ${this.carAndSchoolSavingsTransfer}\n`);
    console.log(`| ira transfer                 | ${this.iraTransfer}\n`);
    console.log(`| emergengy fund               | ${this.emergencyFundTransfer}\n`);
    console.log(`| christmas and birthday gifts | ${this.christmasAndBirthdayGiftsTransfer}\n`);
    // expense totals
    console.log(`------------------------------\n`);
    console.log(`| EXPENSE TOTALS`);
    console.log(`------------------------------\n`);
    console.log(`| Housing & utilities          | ${this.housingAndUtilities}\n`);
    console.log(`| transportation               | ${this.transportation}\n`);
    console.log(`| living expenses              | ${this.livingExpenses}\n`);
    console.log(`| debt and loan repayment      | ${this.debtAndLoanRepayments}\n`);
    console.log(`| healthcare                   | ${this.healthcare}\n`);
    console.log(`| children and education       | ${this.childrenAndEducation}\n`);
    console.log(`| savings and investments      | ${this.savingsAndInvestments}\n`);
    console.log(`| miscellaneous expenses       | ${this.miscellaneousExpenses}\n`);
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
let financeForm = document.forms["my-form"];
if(financeForm){
  financeForm.addEventListener("submit", getFinanceValues);
}

function getFinanceValues(event){
  event.preventDefault();
  let newFinanceSheet = new FinanceSheet(
    financeForm.income.value, 
    financeForm.pensionAndSocialSecurity.value,
    financeForm.investmentsAndSavings.value, 
    financeForm.otherIncome.value,
    //***************************** */
    // expense related parameters
    // Housing and utilities
    financeForm.mortgage.value,
    financeForm.propertyTax.value,
    financeForm.rent.value,
    financeForm.rentalHomeInsurance.value,
    financeForm.hoaCoOp.value,
    financeForm.homeMaintenance.value,
    financeForm.utilities.value,
    // transportation
    financeForm.autoLoan.value,
    financeForm.autoInsurance.value,
    financeForm.gasoline.value,
    financeForm.autoMaintenance.value,
    financeForm.parkingAndTolls.value,
    financeForm.otherTransportCosts.value,
    // Other Debt & Loan Payments
    financeForm.creditCard.value,
    financeForm.studentLoan.value,
    financeForm.otherLoansAndLiabilities.value,
    // <h2>Living Expenses</h2>
    financeForm.groceryBudget.value,
    financeForm.clothing.value,
    financeForm.houseSupplies.value,
    financeForm.mealsOut.value,
    financeForm.otherLivingExpenses.value,
    // <h2>Healthcare</h2>
    financeForm.medicalInsurance.value,
    financeForm.medicalSpending.value,
    // <h2>Children & Education</h2>
    financeForm.childAndPersonalCare.value,
    financeForm.tuitionAndSupplies.value,
    financeForm.childSupport.value,
    financeForm.otherChildSpending.value,
    // <h2>Savings & Investments</h2>
    financeForm._401k.value,
    financeForm.ira.value,
    financeForm.rothIra.value,
    financeForm.collegeSaving.value,
    financeForm.carSaving.value,
    financeForm.emergencyFund.value,
    // <h2>Miscelaneous Expenses</h2>
    financeForm.pet.value,
    financeForm.gifts.value,
    financeForm.hobbies.value,
    financeForm.entertainmentAndTickets.value,
    financeForm.travelAndVacation.value,
    financeForm.otherMiscExpenses.value,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0,0,
    0,0,0,0
  )
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



