console.log("Start JS");

const h1Titular = document.querySelector("#titular");
const imgCoruja = document.querySelector("#lechuza");
const inputsForm = document.querySelectorAll(".formulario input");
//const inputsForm = document.getElementsByTagName("input");
const copyright = document.querySelector("#copyright");
const twitter = document.querySelector(".fa-twitter");
const youtube = document.querySelector(".fa-youtube");
const form = document.querySelector(".formulario");
const h2 = document.querySelectorAll("h2")


//Por seletor
//const header = document.getElementsByTagName("header");

//Por classe
//const container = document.getElementsByClassName("container");

//Por id 
//const copyright = document.getElementsById("#copyright");


console.log(h1Titular);
h1Titular.style.display = "none";

imgCoruja.style.filter = "grayscale(100%)";

console.log(inputsForm);

//const inputsFormArray = Array.from(inputsForm);
//inputsFormArray.forEach(input => input.style.backgroundColor = "red");
inputsForm.forEach(input => input.style.backgroundColor = "red");

console.log("Atributos do id copyright\n", copyright.attributes);

console.log(twitter.getAttribute("href"));

youtube.setAttribute("href", "https://www.youtube.com");
youtube.setAttribute("target", "_blank");

console.log(form);
console.log(form.hasAttribute("action"));

form.setAttribute("action", "http://www.digitalhouse.com");
form.removeAttribute("url");

h2.forEach(zebra => zebra.style.color = "yellow");


/* imgCoruja.onclick = () => {
    let nome = prompt("Digite o seu nome");
    alert(nome)
} */



/* function saudar() {
    alert("Olá")
} */

imgCoruja.addEventListener("click", (event) => {
    console.log(event)
})

imgCoruja.addEventListener("mouseover", () => {
    console.log("Em cima da coruja")
})

imgCoruja.addEventListener("mouseout", () => {
    alert("Saiu da imagem")
})

const inputName = document.querySelector("#name");
console.log(inputName);

/* inputName.addEventListener("keypress", (event) => {
    console.log(event.target.value);
}) */

/* inputName.addEventListener("keydown", (event) => {
    console.log(event.target.value);
}) */

inputName.addEventListener("keyup", exibirValorDigitado)


function exibirValorDigitado(event) {
    console.log(event.target.value);
}