console.log("Start JS");

const h1Titular = document.querySelector("#titular");
const imgCoruja = document.querySelector("#lechuza");
const inputsForm = document.querySelectorAll(".formulario input");


console.log(h1Titular);
h1Titular.style.display = "none";

imgCoruja.style.filter = "grayscale(100%)";

console.group(inputsForm);

inputsForm.forEach(input => input.style.backgroundColor = "red");
