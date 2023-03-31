
const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
    .filter((item => !item.entrega))
    .reduce((totalPedidos, pedidoAtual) => totalPedidos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega)

    if(valorProdutos > 500){
        return valorProdutos
    }else{
        return valorProdutos + entrega[0].valor
    }
}

//console.log(calcularValorPedido(meuPedido)) // 1100

// Pense que nesse senário já começa a crescer a quantidade de situações em que esse código vai atuar 
// Entra o valor de um pedido, a entrega, armazena a função e tira tudo que não é relativo a entrega e depois soma com o edido, testa o valor do pedido para saber a entrega e etc.
// Se você não testar o código a medida que ele cresce, é possível que depois de um certo tamanho você nem teste mais, então "meu código é pequeno demais para testar" não tem problema, a medida que ele crescer irá crescer com qualidade.

module.exports = calcularValorPedido;