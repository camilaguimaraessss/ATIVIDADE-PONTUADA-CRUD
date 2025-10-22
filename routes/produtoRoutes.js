const express = require('express');
const router = express.Router();
const Produto = require('../models/produto'); 

// Rota para LISTAR todos os produtos
router.get('/produtos', async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.render('listarProdutos', { produtos: produtos });
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
        res.send("Ocorreu um erro ao buscar os produtos.");
    }
});

// Rota para exibir o FORMULÁRIO de cadastro
router.get('/produtos/novo', (req, res) => {
    res.render('novoProduto');
});

// Rota para CADASTRAR um novo produto
router.post('/produtos/cadastrar', async (req, res) => {
    try {
        const { descricao, quantidade, valor, data_produto } = req.body;
        await Produto.create({
            DESCRICAO: descricao,
            QUANTIDADE: quantidade,
            VALOR: valor,
            DATA_PRODUTO: data_produto ? data_produto : null
        });
        res.redirect('/produtos'); // Redireciona para a lista
    } catch (error) {
        console.error("Erro ao cadastrar produto:", error);
        res.send("Ocorreu um erro ao cadastrar o produto.");
    }
});

module.exports = router;