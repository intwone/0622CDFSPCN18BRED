require('dotenv').config();
const axios = require('axios');

const countriesApi = axios.create({
    baseURL: process.env.COUNTRIES_API_BASE_URL
});

const methods = {
    getByAlphaCode: async (code) => {
        try {
            const response = await countriesApi.get(`alpha/${code}`);

            if (response.status !== 200) {
                return response.status(response.status).json({ message: "A requisição não deu certo" });
            }

            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
};

module.exports = methods;