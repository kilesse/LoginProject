// Importando o módulo express para criação do servidor
const express = require('express');
// Importando o módulo cors para lidar com a política de CORS
const cors = require('cors');
// Importando a função que busca todos os itens do banco de dados
const allItens = require('./allItens');

const loginUser = require('./loginUser');

const registerUser = require('./register');


// Inicializando o aplicativo express
const app = express();
// Utilizando o middleware cors para permitir requisições de diferentes origens
app.use(cors());
// Habilitando o uso de JSON no corpo das requisições
app.use(express.json());
// Definindo a porta em que o servidor irá escutar
const PORT = 3003;



// Iniciando o servidor e escutando na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



// Rota principal, que retorna todos os itens do banco de dados
app.get('/', async (req, res) => {
    // Chamando a função que busca todos os itens no banco de dados
    const query = await allItens();
    // Retornando os itens como resposta da requisição com status 200
    return res.status(200).json(query);
});


app.post('/register', async (req, res) => {
    const { nome, senha, email, date_of_birth } = req.body;
    
    // Chama a função registerUser para registrar o novo usuário no banco de dados
    const result = await registerUser(nome, senha, email, date_of_birth);
    
    // Retorna uma resposta de sucesso
    return res.status(201).json({ success: true, message: 'Usuário registrado com sucesso' });
});

// Rota para login
app.post('/login', async (req, res) => {
    const { nomeOuEmail, senha } = req.body;

    // Chamar a função para fazer o login
    const loginResult = await loginUser(nomeOuEmail, senha);

    if (loginResult.success) {
        // Login bem-sucedido
        return res.status(200).json({ success: true, message: 'Login bem-sucedido' });
    } else {
        // Login falhou, enviar mensagem de erro
        return res.status(401).json({ success: false, message: loginResult.message });
    }
});