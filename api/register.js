const connection = require('./connection');
const { encryptPassword } = require('./cryptoUtils');

// Função para registrar um novo usuário no banco de dados
const registerUser = async (nome, senha, email, date_of_birth) => {
    try {
        // Criptografar a senha usando a chave pública
        const encryptedPassword = encryptPassword(senha).toString('base64'); // Converte para base64 para armazenamento

        // Inserir o usuário no banco de dados com a senha criptografada
        const [result] = await connection.execute(
            'INSERT INTO users (nome, senha, email, date_of_birth) VALUES (?, ?, ?, ?)',
            [nome, encryptedPassword, email, date_of_birth]
        );

        // Retornando o resultado da query
        return { success: true, result };
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        return { success: false, message: 'Erro ao registrar usuário' };
    }
};

// Exporta a função para ser utilizada em outros arquivos
module.exports = registerUser;
