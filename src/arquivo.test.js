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

