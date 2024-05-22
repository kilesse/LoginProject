const fs = require('fs');
const { publicEncrypt, privateDecrypt } = require('crypto');

// Carrega a chave pública
const publicKey = fs.readFileSync('api/keys/public.pem', 'utf8');
// Carrega a chave privada
const privateKey = fs.readFileSync('api/keys/private.pem', 'utf8');

// Função para criptografar a senha
const encryptPassword = (password) => {
    return publicEncrypt(publicKey, Buffer.from(password));
};

// Função para descriptografar a senha
const decryptPassword = (encryptedPassword) => {
    return privateDecrypt(privateKey, Buffer.from(encryptedPassword, 'base64')).toString('utf8');
};

module.exports = {
    encryptPassword,
    decryptPassword
};
