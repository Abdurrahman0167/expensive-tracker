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

function addMoney() {
  addMoneyBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let value = Number(balance.textContent.replace("₽", ""));
    let sum = Number(transactionSum.value);
    value += sum;
    balance.textContent = value + "₽";

    transactionName.value =''
    transactionSum.value =''
  });
}

function strictMoney() {

  subtractMoneyBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let value = Number(balance.textContent.replace("₽", ""));
    let sum = Number(transactionSum.value);
    value -= sum;
    balance.textContent = value + "₽";

    if(value < 0){
      balance.textContent = '0₽'
    }

    transactionName.value =''
    transactionSum.value =''
  });
}



addMoney();
strictMoney();