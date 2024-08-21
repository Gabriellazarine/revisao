const data = require('../data');

function listarAgendamento() {
    const {agendamentos} = data;
    if(agendamentos.length === 0) {
        console.log('Agendamento não encointrado');
    } else {
        agendamentos.forEach((agendamento, index) => {
            console.log(`\nAgendamento ${index +1}`);
            console.log(`Data: ${agendamento.data}`);
            console.log(`Horário: ${agendamento.horario}`);
            console.log(`ID do cliente: ${agendamento.idDoCliente}`);
            console.log(`ID do serviço: ${agendamento.idDoServico}`);
        });
    }
}

module.exports = { listarAgendamento };