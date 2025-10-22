const express = require('express');
const app = express();
const path = require('path');
const produtoRoutes = require('./routes/produtoRoutes'); // Ajuste o caminho

// Configurar o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Habilitar o parser para dados de formulário
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (CSS, imagens) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usar as rotas de produtos
app.use('/', produtoRoutes); // Monta as rotas na raiz

// Rota principal (apenas para teste)
app.get('/', (req, res) => {
    res.redirect('/produtos'); // Redireciona para a lista de produtos
});

const PORT = 3018;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});