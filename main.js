"use strict";

const money = document.querySelector(".money");
const percent = document.querySelector(".percent");
const duration = document.querySelector(".duration");
const button = document.querySelector(".button");
const out1 = document.querySelector(".percent-money");
const out2 = document.querySelector(".all-money");
const out3 = document.querySelector(".money-per-month");

function credit(e) {
  e.preventDefault();
  let percentMoney = (money.value * percent.value) / 100;
  let allMoney = +money.value + +percentMoney;
  let perMonth = allMoney / duration.value;
  out1.textContent = `Kradit foiz miqdori: ${percentMoney}`;
  out2.textContent = `Jami kredit miqdori: ${allMoney}`;
  out3.textContent = `Oyiga: ${perMonth}`;
  money.value = "";
  percent.value = "";
  duration.value = "";
}
button.addEventListener("click", credit);
