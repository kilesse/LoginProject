const connection = require('./connection');

// Função para registrar um novo usuário no banco de dados
const registerUser = async (nome, senha, email, date_of_birth) => {
    const [result] = await connection.execute('INSERT INTO users (nome, senha, email, date_of_birth) VALUES (?, ?, ?, ?)', [nome, senha, email, date_of_birth]);

    // Retornando o resultado da query
    return result;
};

// Exporta a função para ser utilizada em outros arquivos
module.exports = registerUser;
