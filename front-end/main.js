fetch('http://localhost:3003') 
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Erro ao obter dados do servidor:', error);
  });

  document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        nomeOuEmail: document.getElementById('nomeOuEmail').value,
        senha: document.getElementById('senha').value
    };

    try {
        const response = await fetch('http://localhost:3003/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        if (data.success) {
            // Login bem-sucedido
            console.log('Login bem-sucedido:', data.message);
            window.location.href = 'login.html';
        } else {
            // Login falhou, exibir mensagem de erro
            console.error('Erro ao fazer login:', data.message);
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
});