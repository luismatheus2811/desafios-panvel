# Desafios Técnicos — Processo Seletivo Panvel

Resolução dos desafios técnicos propostos no processo seletivo de estágio.

## Desafio 1 — Classe ListaCompras

Implementação de uma classe em JavaScript para gerenciar uma lista de compras, com os métodos `adicionar`, `remover`, `listar`, `marcar_comprado` e `total`.

📁 [`lista-compras/`](./lista-compras)

### Como executar

```bash
cd lista-compras
node listaCompras.js
```

## Desafio 2 — API REST de Lista de Compras

API REST em Node.js/Express para gerenciar uma lista de produtos em memória (sem banco de dados), com os endpoints:

- `POST /produtos` — adiciona um produto
- `GET /produtos` — lista todos os produtos
- `DELETE /produtos/{produto}` — remove um produto
- `PUT /produtos/{produto}/comprado` — marca um produto como comprado
- `GET /produtos/total` — retorna a quantidade de produtos

📁 [`api-lista-compras/`](./api-lista-compras)

### Como executar

```bash
cd api-lista-compras
npm install
node server.js
```

A API sobe em `http://localhost:3000`.
