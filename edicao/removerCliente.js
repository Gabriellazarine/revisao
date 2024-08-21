const data = require('../data');

function removerCliente(id) {
    const {clientes} = data
    const index = clientes.findIndex(cliente => cliente.id === id)
    if(index !== -1) {
        clientes.splice(index, 1)
        console.log('Cliente deletado')
    } else {
        console.log('Cliente não encontrado')
    }
}

module.exports = { removerCliente }