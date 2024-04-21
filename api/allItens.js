// Importando o pool de conexões com o banco de dados
const connection = require('./connection');

// Função que busca todos os itens do banco de dados
const allItens = async () => {
    // Executando a query SQL para buscar todos os itens
    const [query] = await connection.execute("SELECT * FROM users");
    // Retornando o resultado da query
    return query;
}

// Exportando a função para ser utilizada em outros arquivos
module.exports = allItens;


