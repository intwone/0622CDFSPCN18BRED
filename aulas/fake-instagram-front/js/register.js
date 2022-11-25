console.log("Start JS");

const nameInput = document.querySelector(".form-auth #name");
const usernameInput = document.querySelector(".form-auth #username");
const passwordInput = document.querySelector(".form-auth #password");
const verifyPassword = document.querySelector(".form-auth #verify-password");
const emailInput = document.querySelector(".form-auth #email");

nameInput.addEventListener("keypress", blockNumbers);

function blockNumbers(event) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    console.log(event.key)
    if(numbers.includes(event.key)) {
        event.preventDefault();
        Swal.fire({
            title: 'Ops... Alguma coisa deu errada.',
            text: `${event.target.placeholder}, não pode conter números `,
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}