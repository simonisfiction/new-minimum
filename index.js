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
    incomeTaxRate,
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
    netDiscretionaryIncome,
    netSavingsAndInvestments,

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
    this.incomeTaxRate = incomeTaxRate;
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
    // summary
    this.totalBeforeTaxIncome = totalBeforeTaxIncome;
    this.totalAfterTaxIncome = totalAfterTaxIncome;
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

    this.calculateFinalExpenses();
    this.calculateSummaryValues();
    this.monthlyProfit = 0;
    // this.calculateMonthlyProfit();
    this.calculateDailySavingsTransfers();
    this.updateOutputValues();
    
  }
  
  calculateSummaryValues(){
    this.totalBeforeTaxIncome = this.income 
                              + this.pensionAndSocialSecurity 
                              + this.investmentsAndSavings
                              + this.otherIncome;
    this.totalAfterTaxIncome = this.totalBeforeTaxIncome * (1 - .01 * this.incomeTaxRate);
    this.totalExpenses = this.housingAndUtilities
                       + this.transportation
                       + this.livingExpenses
                       + this.debtAndLoanRepayments
                       + this.healthcare
                       + this.childrenAndEducation
                       + this.savingsAndInvestments
                       + this.miscellaneousExpenses;
    this.netDiscretionaryIncome = this.totalAfterTaxIncome - this.totalExpenses;
    this.netSavingsAndInvestments = this._401k * 12
                                  + this.rothIra
                                  + this.collegeSaving 
                                  + this.carSaving * 12
                                  + this.rothIra * 12
                                  + this.emergencyFund * 12
  }
  calculateDailySavingsTransfers(){
    this.rentAndUtilitiesTransfer = (((this.housingAndUtilities / 12) / 30.5) / 5) * 7;
    this.carInsuranceAndRepairsTransfer = 7 * (((this.autoInsurance / 12) + (this.autoMaintenance / 12)) /30.5) / 5;
    this.carAndSchoolSavingsTransfer = 7 * (this.carSaving + (this.collegeSaving / 12)) / 30.5 / 5;
    this.iraTransfer = 7 * this.rothIra / 30.5 / 5;
    this.emergencyFundTransfer = 7 * this.emergencyFund / 30.5 / 5;
    this.christmasAndBirthdayGiftsTransfer = 7 * this.gifts / 365 / 5;
  } 
  calculateFinalExpenses(){
    this.housingAndUtilities  = this.mortgage * 12
                              + this.propertyTax
                              + this.rent * 12
                              + this.rentalHomeInsurance * 12
                              + this.hoaCoOp
                              + this.homeMaintenance * 12
                              + this.utilities * 12;
    this.transportation = this.autoLoan * 12
                        + this.autoInsurance 
                        + this.gasoline * 12
                        + this.autoMaintenance
                        + this.parkingAndTolls * 12
                        + this.otherTransportCosts * 12;
    this.livingExpenses = this.groceryBudget * 12
                        + this.clothing * 12
                        + this.houseSupplies * 12
                        + this.mealsOut * 12
                        + this.otherLivingExpenses * 12;
    this.debtAndLoanRepayments  = this.creditCard * 12
                                + this.studentLoan * 12
                                + this.otherLoansAndLiabilities * 12;
    this.healthcare = this.medicalInsurance * 12 + this.medicalSpending * 12;
    this.childrenAndEducation = this.childAndPersonalCare * 12
                              + this.tuitionAndSupplies * 12
                              + this.childSupport * 12
                              + this.otherChildSpending * 12;
    this.savingsAndInvestments  = this.collegeSaving
                                + this.rothIra * 12
                                + this._401k * 12
                                + this.ira * 12
                                + this.carSaving * 12
                                + this.emergencyFund * 12;
    this.miscellaneousExpenses  = this.pet * 12
                                + this.gifts
                                + this.hobbies * 12
                                + this.entertainmentAndTickets * 12
                                + this.travelAndVacation
                                + this.otherMiscExpenses * 12; 

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
    console.log(`| Income tax rate              | %${this.incomeTaxRate}\n`);
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
  // calculateMonthlyProfit(){
  //   this.monthlyProfit = parseFloat(this.income) - parseFloat(this.rent) - parseFloat(this.groceryBudget);
    
  //   let out = `<p>Money left over: ${this.monthlyProfit.toFixed(2)}</p>`;
  //   document.querySelector(".out").innerHTML = out;
  // }
  updateOutputValues(){
    // summary
    document.getElementById("totalBeforeTaxIncome").value = `$${this.totalBeforeTaxIncome.toFixed(2)}`;
    document.getElementById("totalAfterTaxIncome").value = `$${this.totalAfterTaxIncome.toFixed(2)}`;
    document.getElementById("totalExpenses").value = `$${this.totalExpenses.toFixed(2)}`;
    document.getElementById("netDiscretionaryIncome").value = `$${this.netDiscretionaryIncome.toFixed(2)}`;
    document.getElementById("netSavingsAndInvestments").value = `$${this.netSavingsAndInvestments.toFixed(2)}`;
    // daily savings totals
    document.getElementById("rentAndUtilitiesTransfer").value = `$${this.rentAndUtilitiesTransfer.toFixed(2)}`;
    document.getElementById("carInsuranceAndRepairsTransfer").value = `$${this.carInsuranceAndRepairsTransfer.toFixed(2)}`;
    document.getElementById("carAndSchoolSavingsTransfer").value = `$${this.carAndSchoolSavingsTransfer.toFixed(2)}`;
    document.getElementById("iraTransfer").value = `$${this.iraTransfer.toFixed(2)}`;
    document.getElementById("emergencyFundTransfer").value = `$${this.emergencyFundTransfer.toFixed(2)}`;
    document.getElementById("christmasAndBirthdayGiftsTransfer").value = `$${this.christmasAndBirthdayGiftsTransfer.toFixed(2)}`;
    // expense totals
    document.getElementById("housingAndUtilities").value = `$${this.housingAndUtilities.toFixed(2)}`;
    document.getElementById("transportation").value = `$${this.transportation.toFixed(2)}`;
    document.getElementById("livingExpenses").value = `$${this.livingExpenses.toFixed(2)}`;
    document.getElementById("debtAndLoanRepayments").value = `$${this.debtAndLoanRepayments.toFixed(2)}`;
    document.getElementById("healthcare").value = `$${this.healthcare.toFixed(2)}`;
    document.getElementById("childrenAndEducation").value = `$${this.childrenAndEducation.toFixed(2)}`;
    document.getElementById("savingsAndInvestments").value = `$${this.savingsAndInvestments.toFixed(2)}`;
    document.getElementById("miscellaneousExpenses").value = `$${this.miscellaneousExpenses.toFixed(2)}`;
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



