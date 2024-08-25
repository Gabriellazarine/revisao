const data = require('../data')

// REMOVER AGENDAMENTO
function removerAgendamento() {
    const idDoAgendamento = parseInt(
        prompt("Insira o ID do agendamento a ser removido: "),
    );
    const index = agendamentos.findIndex(
        (agendamento) => agendamento.idDoAgendamento === idDoAgendamento,
    );
    if (index !== -1) {
        agendamentos.splice(index, 1);
        console.log("Agendamento removido com sucesso!");
    } else {
        console.log("Agendamento não encontrado!");
    }
}

module.exports = { removerAgendamento }
