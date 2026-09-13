const express = require('express');

const app = express();
app.use(express.json());

let produtos = [];

//adicionar um novo produto
app.post('/produtos', (req, res) => {
    const { produto } = req.body;
    if (!produto) {
        return res.status(400).json({erro: 'É necessário informar o nome do produto.'});
    }

    const existe = produtos.some(p => p.nome === produto);
    if (existe) {
        return res.status(400).json({erro: `Produto "${produto}" já está na lista.`});
    }

    produtos.push({ nome: produto, comprado: false });
    res.status(201).json({mensagem: `Produto "${produto}" adicionado.`});
});

//retorna a quantidade de produtos
app.get('/produtos/total', (req, res) => {
    res.json({total: produtos.length});
});

//retorna todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

//deletar um produto
app.delete('/produtos/:produto', (req, res) => {
    const { produto } = req.params;
    const existe = produtos.some(p => p.nome === produto);
    if (!existe) {
        return res.status(404).json({erro: `Produto "${produto}" não encontrado.`});
    }

    produtos = produtos.filter(p => p.nome !== produto);
    res.json({mensagem: `Produto "${produto}" removido.`});
});

//marcar produto como comprado
app.put('/produtos/:produto/comprado', (req, res) => {
    const { produto } = req.params;
    const item = produtos.find(p => p.nome === produto);
    if (!item) {
        return res.status(404).json({erro: `Produto "${produto}" não encontrado.`});
    }

    item.comprado = true;
    res.json({mensagem: `Produto "${produto}" marcado como comprado.`});
});

app.listen(3000, () => {
    console.log('Rodando em http://localhost:3000');
});