console.log("Cadastro JS");

const inputCep = document.querySelector('#cep-register');
const inputEstado = document.querySelector('#state-register');
const inputCidade = document.querySelector('#city-register');
const inputRua = document.querySelector('#street-register');
const inputBairro = document.querySelector('#neighborhood-register');
const loadingSpinner = document.querySelector('.loading');

let loading = false;

const BRASIL_API_BASE_URL = 'https://brasilapi.com.br/api';
const CONFIG = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}

inputCep.addEventListener('keypress', verificarTamanhoDoCep);
inputCep.addEventListener('blur', fetchData);


function verificarTamanhoDoCep(event) {
    console.log(event.target.value.length);
    if(event.target.value.length > 7) {
        event.preventDefault();
    }
}

async function fetchData() {
    const numero = inputCep.value; //86027000
    loading = true;
    handleLoading();

    const response = await fetch(`${BRASIL_API_BASE_URL}/cep/v2/${numero}`, CONFIG);

    /* const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${numero}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }); */

    const data = await response.json();
    console.log(data);

    const { city, neighborhood, state, street } = data;

    inputEstado.value = state;
    inputCidade.value = city;
    inputRua.value = street;
    inputBairro.value = neighborhood;

    loading = false;
    handleLoading();

}


function handleLoading() {
    if(loading) {
        loadingSpinner.classList.add('active');
    } else {
        loadingSpinner.classList.remove('active');
    }
}
