"use strict";

const actualBalance = document.querySelector(".actual-balance");
const transictionIncome = document.querySelector(".balance-income");
const transictionExcome = document.querySelector(".balance-excome");
const transactionName = document.querySelector(".transaktion-name__input");
const transactionSum = document.querySelector(".transaktion-money__money");
const addMoneyBtn = document.querySelector(".transaktion-button-plus");
const subtractMoneyBtn = document.querySelector(".transaktion-button-minus");
const transictionHistory = document.querySelector(".history");
const balance = document.querySelector(".my-balance");

addMoneyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  addMoney();
  addIncome();
  encomeHistory()

  transactionName.value = "";
  transactionSum.value = "";
});

subtractMoneyBtn.addEventListener("click", (event) => {
  event.preventDefault();

  strictMoney();
  addExcome();

  transactionName.value = "";
  transactionSum.value = "";
});

function addMoney() {
  let value = Number(balance.textContent.replace("₽", ""));
  let sum = Number(transactionSum.value);
  value += sum;
  balance.textContent = value + "₽";
}

function strictMoney() {
  let value = Number(balance.textContent.replace("₽", ""));
  let sum = Number(transactionSum.value);
  value -= sum;
  balance.textContent = value + "₽";

  if (value < 0) {
    balance.textContent = "0₽";
  }
}

function addIncome() {
  let income = document.createElement("p");
  income.textContent = transactionSum.value;
  transictionIncome.append(income);
}

function addExcome() {
  let excome = document.createElement("p");
  excome.textContent = transactionSum.value;

  if (balance.textContent == "0₽") return;

  transictionExcome.append(excome);
}

function encomeHistory() {
  let incomenBox = document.createElement("div");
  let incomeTitle = document.createElement("p");
  let incomeSum = document.createElement("p");

  incomenBox.classList.add('income-history')

  incomeTitle.textContent = transactionName.value + ":";
  incomeSum.textContent = transactionSum.value + "₽";
  incomenBox.append(incomeTitle, incomeSum);
  transictionHistory.append(incomenBox)
}