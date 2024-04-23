// Obtendo dados do servidor ao carregar a página
fetch('http://localhost:3003') 
  .then(response => response.json()) // Convertendo a resposta para JSON
  .then(data => { // Manipulando os dados recebidos
    console.log(data); // Exibindo os dados no console
  })
  .catch(error => { // Capturando e tratando erros
    console.error('Erro ao obter dados do servidor:', error); // Exibindo erro no console
  });

// Adicionando um listener para o formulário de login
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevenindo o comportamento padrão do formulário

    // Obtendo os dados do formulário
    const formData = {
        nomeOuEmail: document.getElementById('nomeOuEmail').value,
        senha: document.getElementById('senha').value
    };

    try {
        // Enviando os dados do formulário para o servidor via requisição POST
        const response = await fetch('http://localhost:3003/login', {
            method: 'POST', // Método da requisição
            headers: {
                'Content-Type': 'application/json' // Tipo de conteúdo
            },
            body: JSON.stringify(formData) // Convertendo os dados para JSON e enviando no corpo da requisição
        });

        // Obtendo a resposta do servidor
        const data = await response.json(); // Convertendo a resposta para JSON

        // Verificando se o login foi bem-sucedido
        if (data.success) {
            // Login bem-sucedido
            console.log('Login bem-sucedido:', data.message);
            // Redirecionando o usuário para outra página
            window.location.href = 'login.html';
        } else {
            // Login falhou, exibir mensagem de erro
            console.error('Erro ao fazer login:', data.message);
        }
    } catch (error) {
        // Capturando e tratando erros
        console.error('Erro ao fazer login:', error);
    }
});
