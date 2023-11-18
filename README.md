# Intapi - Biblioteca para Requisições HTTP em Node.js

A biblioteca `Intapi` simplifica a realização de requisições HTTP GET e POST em projetos Node.js usando o Axios. Siga as instruções abaixo para instalar e começar a usar a biblioteca em seu projeto.

## Instalação

Para instalar a biblioteca `Intapi` em seu projeto Node.js, utilize o seguinte comando:

```bash
npm install intapi
```

## Exemplo de Uso

### Configuração Inicial

```javascript
const Intapi = require('intapi');
const apiBaseUrl = 'http://localhost'; // Ajuste a URL conforme sua configuração
const intapi = new Intapi(apiBaseUrl);
```

### Requisição GET

```javascript
async function exemploRequisicaoGet() {
    try {
        const resultado = await intapi.getRequest('people');
        console.log('Resultado da Requisição GET:', resultado);
    } catch (erro) {
        console.error('Erro na Requisição GET:', erro.message);
    }
}

exemploRequisicaoGet();
```

### Requisição POST

```javascript
async function exemploRequisicaoPost() {
    try {
        const dadosNovaPessoa = {
            nome: 'John Doe',
            idade: 30
        };

        const resultado = await intapi.postRequest('peoples', dadosNovaPessoa);
        console.log('Resultado da Requisição POST:', resultado);
    } catch (erro) {
        console.error('Erro na Requisição POST:', erro.message);
    }
}

exemploRequisicaoPost();
```

**Observação:** Certifique-se de substituir a URL base e os dados conforme necessário para o seu ambiente.

## Resultados Esperados

Ao executar os exemplos acima, você pode esperar obter saídas semelhantes às seguintes:

### Resultado da Requisição GET

```
Resultado da Requisição GET: [ { name: 'David', age: 26 }, { name: 'Lucia', age: 22 } ]
```

### Resultado da Requisição POST

```
Resultado da Requisição POST: { nome: 'John Doe', idade: 30 }
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para reportar problemas ou enviar solicitações de pull no [repositório GitHub](https://github.com/DsK-David/intapi).

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).