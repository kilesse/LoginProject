const connection = require('./connection');
const { decryptPassword } = require('./cryptoUtils');

// Função para fazer login de usuário
const loginUser = async (nomeOuEmail, senha) => {
    try {
        // Consultar o banco de dados para encontrar um usuário com o nome ou email fornecido
        const [result] = await connection.execute(
            'SELECT * FROM users WHERE nome = ? OR email = ?',
            [nomeOuEmail, nomeOuEmail]
        );

        // Verificar se o usuário foi encontrado
        if (result.length === 0) {
            // Usuário não encontrado
            return { success: false, message: 'Nome de usuário/email não encontrado' };
        }

        // Comparar a senha fornecida com a senha armazenada no banco de dados
        const user = result[0];
        const decryptedPassword = decryptPassword(Buffer.from(user.senha, 'base64')); 
        if (senha !== decryptedPassword) {
            // Senha incorreta
            return { success: false, message: 'Senha incorreta' };
        }

        // Login bem-sucedido
        return {  success: true, message: 'Login bem-sucedido' 
         };
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        return { success: false, message: 'Erro ao fazer login' };
    }

};



module.exports = loginUser;