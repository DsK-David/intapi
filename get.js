const Intapi = require('./intapi-lib'); // Certifique-se de usar o caminho correto para o seu arquivo intapi-lib

const apiBaseUrl = 'http://localhost'; // Altere conforme necessário
const intapi = new Intapi(apiBaseUrl);

async function getData() {
    try {
        const result = await intapi.getRequest('people');
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

getData();
