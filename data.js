let clientes = [ 
    {
        nome: "Henrique",
        CPF: "113.666.545-12",
        telefone: "(41) 9959-0223",
        email: "henrique@gmail.com",
        id: 1
    },
    {
        nome: "Gustavo",
        CPF: "113.571.199-41",
        telefone: "(42) 9932-7355",
        email: "gustavo@gmail.com",
        id: 2
    }
]

let servicos = [
    {
        nomeDoServico: "Corte de cabelo",
        preco: 35.00,
        idDoServico: 1
    },
    {
        nomeDoServico: "Fazer a barba",
        preco: 30.00,
        idDoServico: 2  
    },
]

let agendamentos = [
    {
        data: "24-08-2024",
        horario: "18:00",
        idDoCliente: 1,
        idDoServico: 2,
        idDoAgendamento: 1
    },
    {
        data: "29-08-2024",
        horario: "19:00",
        idDoCliente: 2,
        idDoServico: 1,
        idDoAgendamento: 2
    }    
]

module.exports = {
    clientes,
    servicos,
    agendamentos
}