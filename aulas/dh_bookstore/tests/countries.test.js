const countriesApi = require("../services/countries");

const countryCode = 'br'
countriesApi.getByAlphaCode(countryCode)
    .then(response => console.log(response))
    .catch(e => console.log(e))