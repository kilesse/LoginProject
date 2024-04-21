# Projeto de Exemplo

Este é um projeto de exemplo para demonstrar como criar um servidor Node.js utilizando o framework Express e realizar operações básicas em um banco de dados MySQL.

## Instalação

1. Clone o repositório para o seu ambiente local:

    ```
    git clone https://github.com/kilesse/LoginProject.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd login-sistem
    ```

3. Inicialize o npm para gerenciar as dependências do projeto:

    ```
    npm init -y
    ```

4. Instale as dependências necessárias (express, mysql2 e nodemon):

    ```
    npm install express mysql2 nodemon cors
    ```

5. Na pasta `package.json`, adicione o seguinte comando ao objeto `scripts`:

    ```json
    "dev": "nodemon server.js"
    ```

## Configuração do Banco de Dados

Antes de executar o projeto, certifique-se de ter um servidor MySQL em execução e criar um banco de dados com a tabela necessária. Você pode modificar as configurações de conexão com o banco de dados no arquivo `connection.js`.

## Execução

Para executar o servidor, utilize o seguinte comando:

npm run dev

Este comando irá iniciar o servidor utilizando o nodemon, o que permite que o servidor seja reiniciado automaticamente sempre que houver alterações nos arquivos do projeto.

Após iniciar o servidor, você pode acessar os endpoints definidos no arquivo `server.js` para interagir com o banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para reportar bugs ou sugerir melhorias.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).



