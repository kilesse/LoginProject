# Use uma imagem Node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha a porta em que o servidor Node.js estará em execução
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
