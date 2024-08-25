const data = require('../data');

// REMOVER SERVIÇO
function removerServico() {
    const idDoServico = parseInt(
        prompt("Insira o ID do serviço a ser removido: "),
    );
    const index = servicos.findIndex(
        (servico) => servico.idDoServico === idDoServico,
    );
    if (index !== -1) {
        servicos.splice(index, 1);
        console.log("Serviço removido com sucesso!");
    } else {
        console.log("Serviço não encontrado!");
    }
}

module.exports = { removerServico }
