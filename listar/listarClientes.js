const data = require('../data');

function listarClientes() {
    const {clientes} = data
    if(clientes.length === 0) {
        console.log('Nenhum cliente encontrado');
    } else {
        clientes.forEach((cliente, index) => {
            console.log(`\n-Cliente ${index + 1}`);
            console.log(`-Nome ${cliente.nome}`);
            console.log(`-CPF: ${cliente.CPF}`);
            console.log(`-Telefone: ${cliente.telefone}`);
            console.log(`-E-mail: ${cliente.email}`);
        });
    }
}   
module.exports = { listarClientes };