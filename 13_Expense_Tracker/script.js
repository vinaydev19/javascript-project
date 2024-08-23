let getAmount = document.querySelector("#getAmount");
let getNote = document.querySelector("#getNote");
let AddAmountDetails = document.querySelector(".AddAmountDetails");
let ḍateAndtime = document.querySelector(".ḍateAndtime");
// let newTime = document.querySelector(".newTime");
let displayIncomeAndExpense = document.querySelector(
  ".displayIncomeAndExpense"
);
let newdate = new Date();
let getIncAndExpOption = document.querySelector("#getIncAndExpOption");

let displaydailyIncAndExp = [];
let IncomeArr = [];
let ExpenseArr = [];
let totalIncAmt = document.getElementById("totalIncAmt");
let totalExpAmt = document.getElementById("totalExpAmt");
let totalAmt = document.getElementById("totalAmt");


function updateLocalStorage() {
  localStorage.setItem('IncomeArr', JSON.stringify(IncomeArr));
  localStorage.setItem('ExpenseArr', JSON.stringify(ExpenseArr));
}



AddAmountDetails.addEventListener("click", () => {
  console.log(getAmount.value);
  console.log(getNote.value);
  console.log(getIncAndExpOption.value);
  getIncAndExp();
  calTotalAmt();

  getAmount.value = "";
  getNote.value = "";
});

setInterval(() => {
  let newdate = new Date();
  ḍateAndtime.innerHTML = newdate.toLocaleString();
}, 1000);

function getIncAndExp() {
  let dailyincomeAndExpense = document.createElement("div");
  dailyincomeAndExpense.classList.add("dailyincomeAndExpense");
  let pdate = document.createElement("p");
  pdate.classList.add("date");
  pdate.innerText = newdate.toDateString();

  let pdisplayNote = document.createElement("p");
  pdisplayNote.classList.add("displayNote");
  pdisplayNote.innerText = getNote.value;

  let pdailyIncExp = document.createElement("p");
  pdailyIncExp.classList.add("dailyIncExp");

  if (getIncAndExpOption.value === "Income") {
    pdailyIncExp.innerText = getAmount.value;
    pdailyIncExp.classList.remove("Expenseamt");
    pdailyIncExp.classList.add("Incomeamt");
  } else {
    pdailyIncExp.innerText = getAmount.value;
    pdailyIncExp.classList.remove("Incomeamt");
    pdailyIncExp.classList.add("Expenseamt");
  }

  let ptrashbtn = document.createElement("button");
  ptrashbtn.classList.add("trashbtn");
  ptrashbtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  dailyincomeAndExpense.appendChild(pdate);
  dailyincomeAndExpense.appendChild(pdisplayNote);
  dailyincomeAndExpense.appendChild(pdailyIncExp);
  dailyincomeAndExpense.appendChild(ptrashbtn);
  displayIncomeAndExpense.appendChild(dailyincomeAndExpense);
}

function calTotalAmt() {
  if (getIncAndExpOption.value === "Income") {
    IncomeArr.push(Number(getAmount.value)); // Convert to number
    let IncomeSum = IncomeArr.reduce((acc, currval) => acc + currval, 0); // Sum the array
    totalIncAmt.innerText = IncomeSum;
  } else {
    ExpenseArr.push(Number(getAmount.value)); // Convert to number
    let ExpenseSum = ExpenseArr.reduce((acc, currval) => acc + currval, 0); // Sum the array
    totalExpAmt.innerText = ExpenseSum;
  }

  // Update total amount
  let totalIncome = IncomeArr.reduce((acc, currval) => acc + currval, 0);
  let totalExpense = ExpenseArr.reduce((acc, currval) => acc + currval, 0);
  totalAmt.innerText = totalIncome - totalExpense;
}