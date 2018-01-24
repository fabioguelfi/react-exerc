const produto = {
    nome: 'bic preta',
    preco: '1.90',
    desconto: 0.05
}

function clone(obj){
    return {...obj}
}

const novoProduto = clone(produto)
novoProduto.nome = 'bic azul'

console.log(produto, novoProduto)