const data = require('../data')

function cadastrarServico(nomeDoServico, preco) {
    const {servicos} = data
    const servico = {
        id: servicos.length + 1,
        nomeDoServico,
        preco
    }
    servicos.push(servico)
    console.log('Cadastro realizado com sucesso!')
}

module.exports = { cadastrarServico }