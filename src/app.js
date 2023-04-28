/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function repartir() {
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
  let paloArr = document.querySelector("#palo1");
  let paloAbj = document.querySelector("#palo2");
  let paloRnd = palo[Math.floor(Math.random() * palo.length)];
  let numeroRnd = document.querySelector(".numero");
  numeroRnd.textContent = numero[Math.floor(Math.random() * numero.length)];
  paloArr.textContent = paloRnd;
  paloAbj.textContent = paloRnd;
  if (paloRnd == "♥") {
    paloArr.style.color = "red";
    paloAbj.style.color = "red";
  } else {
    paloArr.style.color = "black";
    paloAbj.style.color = "black";
  }
}

window.onload = function() {
  repartir();
};
document.getElementById("boton").addEventListener("click", repartir);
setInterval(repartir, 10000);

function redimensionar() {
  let valorAlto = document.getElementById("altura").value;
  let valorAncho = document.getElementById("ancho").value;
  // console.log("redimensión");
  // console.log(document.getElementById("altura").value);
  // console.log(document.getElementById("ancho").value);
  document.getElementById("carta").style.height = valorAlto + "px";
  document.getElementById("carta").style.width = valorAncho + "px";
}
document.getElementById("botonRedim").addEventListener("click", redimensionar);
