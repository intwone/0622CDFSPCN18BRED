console.log('Start Register JS');

const form = document.querySelector('.form-register form');
const inputZipCode = document.querySelector('#cep-register');
const inputState = document.querySelector('#state-register');
const inputCity = document.querySelector('#city-register');
const inputStreet = document.querySelector('#street-register');
const inputNeighborhood = document.querySelector('#neighborhood-register');
const loadingSpinner = document.querySelector('.loading');

let loading = false;

const APP_BASE_URL = 'http://localhost:5500';

const BRASIL_API_BASE_URL = 'https://brasilapi.com.br/api/cep/v2';

const CONFIG = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',	
    }
}

form.addEventListener('submit', handleSubmit);
inputZipCode.addEventListener('keypress', verifyCepLength);
inputZipCode.addEventListener('blur', fetchCepData);

function handleSubmit(event) {
    event.preventDefault();
    let formOk = false;

    function handleInputStatus(input) {
        if(input.value == "") {
            input.style.outline = "2px solid red";
            return formOk = false
        } else {
            input.style.outline = "2px solid lightgreen";
            return formOk = true;
        }
    }

    handleInputStatus(inputZipCode);
    handleInputStatus(inputState);
    handleInputStatus(inputCity);
    handleInputStatus(inputStreet);
    handleInputStatus(inputNeighborhood);

    if(formOk) {
        clearInput();
        alert("Enviado com sucesso");
        window.location.href = `${APP_BASE_URL}/login.html`
    } else {
        alert("Não foi possível enviar");
    }

}

function verifyCepLength(event) {
    /* console.log(event.target.value.length) */
    if(event.target.value.length > 7) {
        event.preventDefault();
    }
}

async function fetchCepData() {
    const cepNumber = inputZipCode.value;
    /* alert(cepNumber.length) */
    loading = true;
    handleLoading();

    const response = await fetch(`${BRASIL_API_BASE_URL}/${cepNumber}`, CONFIG);
    const data = await response.json();
    console.log(data)

    const { city, neighborhood, state, street } = data;

    inputState.value = state;
    inputCity.value = city;
    inputStreet.value = street;
    inputNeighborhood.value = neighborhood;
    
    loading = false;
    handleLoading();
}

function clearInput() {
    const inputs = document.querySelectorAll('.form-register input');
    inputs.forEach(input => input.value = '');
}

function handleLoading() {
    if(loading) {
        loadingSpinner.classList.add('active');
        document.body.style.background = '#e8e8e8a3';
    } else {
        loadingSpinner.classList.remove('active');
        document.body.style.background = 'white';
    }
}