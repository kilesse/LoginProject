// Importando o módulo express para criação do servidor
const express = require('express');
// Importando a função que busca todos os itens do banco de dados
const allItens = require('./allItens');

// Inicializando o aplicativo express
const app = express();
// Habilitando o uso de JSON no corpo das requisições
app.use(express.json());
// Definindo a porta em que o servidor irá escutar
const PORT = 3003;

// Iniciando o servidor e escutando na porta definida
app.listen(3003, () => { console.log(`Funcionando na porta ${PORT}`)})

// Rota principal, que retorna todos os itens do banco de dados
app.get('/', async (req, res) => {
    // Chamando a função que busca todos os itens
    const query = await allItens();
    // Retornando os itens como resposta da requisição com status 201
    return res.status(201).json(query);
})