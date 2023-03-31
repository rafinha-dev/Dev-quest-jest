const calcularValorPedido = require('./Entrega.js')
// o nome do arquivo não é funcionalmente relevante, apenas o require
it('Não deve cobrar valor de frete quando o valor for 500 ou mais', () => {

    //arange
    const meuPedido = {
        itens: [
            {nome: 'Poção de vida', valor: 800},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    //act
    const resultado = calcularValorPedido(meuPedido)


    // acert 
    expect(resultado).toBe(800)
    // nesse caso eu já sabia o valor do resultado do teste, se o valor fosse diferente ela iria falhar
})
// se eu deixar só esse fluxo de testes, toda vez que cair no else, o teste retornará falso, sendo que oq aconteceu é que eu não criei um teste para essa situação ainda

it('Deve cobrar o valor do frete caso  o valor seja menor que 500', () => {
    // arrange 
    const meuPedido = {
        itens: [
            {nome: 'Poção do amor', valor: 300},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    // act
    const resultado = calcularValorPedido(meuPedido)

    // assert
    expect(resultado).toBe(400)
})

// testando limites
it('deve cobrar o valor do frete caso o produto seja exatamente 500', () => {
    const meuPedido = {
        itens: [
            {nome: 'Poção do amor', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(600)
})

// casos os estados de entrega sejam SP ou GO deve-se acrescentar um valor de 30% na entrega.
it('Deve adicionar um valor de 30% no valor do pedido caso o estado seja SP', () => {

    const pedidoComEstadoSP = {
        estado: 'SP', 
        itens: [
            {nome: 'Poção do amor', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(pedidoComEstadoSP)
    // como eu passei pedidoComEstado e ele com estado lá no código funcionou

    expect(resultado).toBe(620)
})


// casos os estados de entrega sejam SP ou GO deve-se acrescentar um valor de 30% na entrega.
it('Deve adicionar um valor de 30% no valor do pedido caso o estado seja GO', () => {

    const pedidoComEstadoGO = {
        estado: 'GO', 
        itens: [
            {nome: 'Poção do amor', valor: 500},
            {nome: 'Entrega', valor: 100, entrega: true}
        ]
    }
    const resultado = calcularValorPedido(pedidoComEstadoGO)
    // como eu passei pedidoComEstado e ele com estado lá no código funcionou

    expect(resultado).toBe(620)
})

