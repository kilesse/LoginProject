# Projeto de Exemplo

Este é um projeto de exemplo para demonstrar como criar um servidor Node.js utilizando o framework Express e realizar operações básicas em um banco de dados MySQL.

## Instalação

1. Clone o repositório para o seu ambiente local:

    ```
    git clone https://github.com/kilesse/LoginProject.git
    ```

2. Navegue até o diretório do projeto:

    ```
    cd LoginProject
    ```

3. Inicialize o npm para gerenciar as dependências do projeto:

    ```
    npm init -y
    ```

4. Instale as dependências necessárias (express, mysql2 e nodemon):

    ```
    npm install express mysql2 nodemon cors express body-parser
    ```

5. Na pasta `package.json`, adicione o seguinte comando ao objeto `scripts`:

    ```json
    "dev": "nodemon server.js"
    ```

## Configuração do Banco de Dados

Antes de executar o projeto, é necessário configurar o banco de dados MySQL. Siga as etapas abaixo:

1. Certifique-se de ter um servidor MySQL em execução em sua máquina local ou em algum servidor remoto.
2. Crie um banco de dados MySQL utilizando o arquivo de dump fornecido na pasta `data-base`. Você pode importar o arquivo de dump usando o comando `mysql -u username -p database_name < dump_file.sql`, substituindo `username` pelo seu nome de usuário do MySQL e `database_name` pelo nome do banco de dados que deseja criar.
3. Verifique e, se necessário, ajuste as configurações de conexão com o banco de dados no arquivo `connection.js`. Certifique-se de que as configurações de host, porta, usuário, senha e nome do banco de dados correspondam à sua configuração do MySQL.

Com o banco de dados devidamente configurado, você estará pronto para executar o projeto.


## Execução

Para executar o servidor, utilize o seguinte comando:

npm run dev

Este comando irá iniciar o servidor utilizando o nodemon, o que permite que o servidor seja reiniciado automaticamente sempre que houver alterações nos arquivos do projeto.

Após iniciar o servidor, você pode acessar os endpoints definidos no arquivo `server.js` para interagir com o banco de dados.

# Explicação do Código

Este repositório contém um projeto de sistema de login desenvolvido com Node.js no backend e HTML/CSS/JavaScript no frontend. Abaixo está uma explicação de como cada parte do código funciona:

## Backend (Node.js)

### server.js

- Este arquivo é o ponto de entrada do servidor.
- Utiliza o Express para criar um servidor HTTP.
- Define as rotas para lidar com solicitações de login, registro e outras operações.
- Usa o middleware CORS para permitir solicitações de diferentes origens.
- Conecta-se ao banco de dados MySQL para armazenar e recuperar dados de usuários.
- Gerencia as requisições HTTP, processando os dados enviados pelo cliente e retornando respostas adequadas.

### connection.js

- Este arquivo estabelece uma conexão com o banco de dados MySQL.
- Utiliza o módulo mysql2 para conectar-se ao banco de dados.

### allItens.js

- Este arquivo contém uma função que busca todos os itens do banco de dados.
- Utiliza a conexão com o banco de dados estabelecida em connection.js para executar consultas SQL e recuperar os dados.

### register.js

- Este arquivo contém uma função para registrar um novo usuário no banco de dados.
- Recebe os dados do novo usuário (nome, senha, email, data de nascimento) e os insere no banco de dados.

### loginUser.js

- Este arquivo contém uma função para fazer login de um usuário existente.
- Verifica se o nome de usuário ou email fornecido existe no banco de dados e se a senha corresponde.
- Retorna uma mensagem de sucesso ou falha de acordo com o resultado do login.

## Frontend (HTML/CSS/JavaScript)

### index.html

- Este arquivo é a página inicial do frontend.
- Contém um formulário de login onde os usuários podem inserir suas credenciais.

### main.js

- Este arquivo contém o código JavaScript que manipula o formulário de login.
- Envia os dados do formulário para o servidor via requisição POST e trata a resposta do servidor.
- Redireciona o usuário para uma página de dashboard após o login bem-sucedido.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou abrir issues para reportar bugs ou sugerir melhorias.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).



