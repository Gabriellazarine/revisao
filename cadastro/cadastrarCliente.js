const data = require('../data');

function cadastrarCliente(nome, CPF, telefone, email) {
    const {clientes} = data;
    const cliente = {
        id: clientes.length +1,
        nome,
        CPF,
        telefone,
        email
    }
    clientes.push(cliente);
    console.log('Cadastro realizado com sucesso!');
}

module.exports = { cadastrarCliente };