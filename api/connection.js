// Importando o módulo mysql para conexão com o banco de dados
const mysql = require('mysql2/promise');

// Criando e configurando o pool de conexões com o banco de dados
const connection = mysql.createPool({
    host: 'localhost' ,
    port: 3306,
    user: 'root',
    password: 'root',
    database : 'login',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Exportando o pool de conexões para ser utilizado em outros arquivos
module.exports = connection;
