"use strict";

const actualBalance = document.querySelector(".actual-balance");
const transictionIncome = document.querySelector(".balance-income");
const transictionExcome = document.querySelector(".balance-excome");
const transactionName = document.querySelector(".transaktion-name__input");
const transactionSum = document.querySelector(".transaktion-money__money");
const addMoneyBtn = document.querySelector(".transaktion-button-plus");

const transictionHistory = document.querySelector(".history");

transictionButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(transactionName.value, transactionSum.value);

  myBalanse();

  transactionName.value = "";
  transactionSum.value = "";
});

function myBalanse() {
  let balance = document.createElement("p");
  balance.textContent = transactionSum.value + "₽";
  balance.classList.add("my-balanse");
  actualBalance.append(balance);
}
