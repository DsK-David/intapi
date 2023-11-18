const Intapi = require('./intapi-lib'); // Certifique-se de usar o caminho correto para o seu arquivo intapi-lib

const apiBaseUrl = 'http://localhost'; // Altere conforme necessário
const intapi = new Intapi(apiBaseUrl);

async function postData() {
    try {
        const newPersonData = {
            name: 'John Doe',
            age: 30
        };

        const result = await intapi.postRequest('people', newPersonData);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

postData();
