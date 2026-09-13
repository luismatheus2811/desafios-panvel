class ListaCompras {
    constructor() {
        this.produtos = [];
    }

    //adicionar produto
    adicionar(produto) {
        if (this.produtos.includes(produto)) {
            return console.log(`Já existe um produto chamado ${produto} na lista.`);
        }
        this.produtos.push(produto);
    }
    
    //remover produto
    remover(produto) {
        const existe = this.produtos.includes(produto);
        if (!existe) {
            return console.log(`Não existe um produto chamado "${produto}" na lista.`);
        }
        this.produtos = this.produtos.filter(p => p !== produto);
    }

    //listar produtos
    listar() {
        return this.produtos;
    }

    //marcar produto como comprado
    marcar_comprado(produto) {
        const i = this.produtos.indexOf(produto);
        if (i === -1) {
            return console.log(`Não existe um produto chamado "${produto}" na lista.`);
        }
        this.produtos[i] = produto + " - comprado";
    }

    //numero total de produtos na lista
    total() {
        return this.produtos.length;
    }
}

//funcao de teste
function teste() {
    const lista = new ListaCompras();
    lista.adicionar("Arroz");
    lista.adicionar("Feijao");
    lista.adicionar("Leite");
    
    console.log(`Total de itens: ${lista.total()}`);
    
    lista.marcar_comprado("Arroz");
    lista.remover("Leite");

    lista.listar().forEach(item => console.log(item));
    
    console.log(`Total de itens: ${lista.total()}`);
}

teste();
