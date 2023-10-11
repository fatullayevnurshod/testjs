let h1 = document.querySelector(".card_text h1");
let body = document.querySelector("body");
let p = document.querySelector(".card_text p");
let input = document.querySelector(".card_input .input_1");
let input2 = document.querySelector(".card_input .input_2");
let cardinput = document.querySelector(".card_input");
let ul = document.querySelector(".card_text_2 ul");
let li = document.querySelectorAll(".card_text_2 ul li");
let icons = document.querySelectorAll(".card_text_2 ul li .icons");

function h1Style() {
  h1.setAttribute("style", "font-size: 36px");
}
h1Style();

(function bodyStyle() {
  body.style.width = "100vw";
  body.style.height = "100vh";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.overflow = "hidden";
})();

function pStyle() {
  p.style.color = "red";
  p.style.margin = "10px 0 0 0";
}

pStyle();

(function inputStyle1() {
  input.setAttribute("style", "border-radius: 7px 0 0 7px");
  input.style.width = "400px";
  input.style.padding = "10px";
  input.style.border = "none";
  input.style.border = "2px solid rgb(126, 122, 122)";
})();

function inputStyle2() {
  input2.setAttribute("style", "border-radius: 0 7px 7px 0");
  input2.style.width = "60px";
  input2.style.padding = "11.5px";
  input2.style.border = "none";
  input2.style.background = "#0367fe";
  input2.style.color = "#fff";
}
inputStyle2();

(function cardinputStyle() {
  cardinput.style.display = "flex";
  cardinput.style.margin = "20px 0 0 0";
})();

function ulStyle2() {
  ul.setAttribute("style", "list-style: none");
  ul.style.margin = "10px 0 0 0";
}

ulStyle2();

(function liStyle() {
  for (let i = 0; i < li.length; i++) {
    li[i].setAttribute("style", "border-bottom: 2px solid #b2afaf;");
    li[i].style.padding = "15px 10px 15px 0";
    li[i].style.display = "flex";
    li[i].style.justifyContent = "space-between";
    // li[i].classList.toggle("del");
  }
})();

function iconsStyle() {
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.display = "flex";
    icons[i].style.gap = "20px";
  }
}
iconsStyle();
