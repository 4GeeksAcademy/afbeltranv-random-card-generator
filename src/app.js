/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palo = ["♦", "♥", "♠", "♣"];
  const numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numeroRnd = document.querySelector(".numero");
  numeroRnd.textContent = numero[Math.floor(Math.random() * numero.length)];
  let paloArr = document.querySelector("#palo1");
  let paloAbj = document.querySelector("#palo2");
  let paloRnd = palo[Math.floor(Math.random() * palo.length)];
  paloArr.textContent = paloRnd;
  paloAbj.textContent = paloRnd;
  if (paloRnd == "♥") {
    paloArr.style.color = "red";
    paloAbj.style.color = "red";
  }
};
