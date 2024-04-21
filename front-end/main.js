fetch('http://localhost:3003') 
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Erro ao obter dados do servidor:', error);
  });