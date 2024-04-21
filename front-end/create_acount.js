document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const convertToMySQLDate = (dateString) => {
        // Obtém a data no formato 'YYYY-MM-DD'
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adiciona um zero à esquerda se for necessário
        const day = date.getDate().toString().padStart(2, '0'); // Adiciona um zero à esquerda se for necessário
        return `${year}-${month}-${day}`;
    };
    
    // Obtém a data de nascimento do formulário
    const dataDeNascimentoDoFormulario = document.getElementById('data_de_nascimento').value;
    
    // Converte a data de nascimento para o formato do MySQL
    const dataDeNascimentoConvertida = convertToMySQLDate(dataDeNascimentoDoFormulario);
    
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        date_of_birth: dataDeNascimentoConvertida
    };

    try {
        const response = await fetch('http://localhost:3003/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
    }
});
