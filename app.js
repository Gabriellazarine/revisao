const prompt = require('prompt-sync')();
const {listarClientes} = require('./listar/listarClientes');
const {listarServicos} = require('./listar/listarServicos');
const {listarAgendamento} = require('./listar/listarAgendamento');
const {cadastrarCliente} = require('./cadastro/cadastrarCliente');
const {cadastrarServico} = require('./cadastro/cadastrarServico');
const {cadastrarAgendamento} = require('./cadstro/cadastrarAgendamento');
const {atualizarAgendmento} = require('./edicao/atualizarAgendamento');
const {removerCliente} = require('./edicao/removerCliente');
const {removerServico} = require('./edicao/removerServico');
const {removerAgendmento} = require('./edicao/removerAgendamento');

exibirMenu()
function exibirMenu() {
    console.log(`
    1. Cadastrar Cliente
    2. Cadastrar Serviço
    3. Agendar Serviço
    4. Listar Clientes
    5. Listar Serviços
    6. Listar Agendamentos
    7. Atualizar Agendamento
    8. Remover Cliente
    9. Remover Serviço
    10. Remover Agendamento
    11. Sair
`)

opcao = prompt('Insira a opção desejada: ');

switch(opcao) {
    case '1':
        const nome = prompt('Insira o nome: ');
        const CPF = prompt('Insira o CPF: ');
        const telefone = prompt('Insira o número de telefone: ');
        const email = prompt('Insira o email: ');
        cadastrarCliente(nome, CPF, telefone, email);
        exibirMenu();
        break;
    case '2':
        const nomeDoServico = prompt('Insira o nome do serviço: ');
        const preco = prompt('Insira o preço do serviço: ');
        cadastrarServico(nomeDoServico, preco);
        exibirMenu();
        break;
    case "3":
        const data = prompt("Insira a data: ");
        const horario = prompt("Insira o horário: ");
        const idDoCliente = prompt("Insira o ID do cliente: ");
        const idDoServico = prompt("Insira o ID do serviço: ");
        cadastrarAgendamento(data, horario, idDoCliente, idDoServico);
        exibirMenu();
        break;
    case '4':
        listarClientes();
        exibirMenu();
        break;
    case '5':
        listarServicos();
        exibirMenu();
        break;
    case '6':
        listarAgendamento();
        exibirMenu();
        break;
    case "7":
        listarAgendamento();
        atualizarAgendamento();
        exibirMenu();
        break;
    case '8':
        listarClientes();
        id = prompt('Insira o número que deseja remover: ');
        const cliente = removerCliente(id);
        removerCliente(cliente)
        exibirMenu();
        break;
     case "9":
        listarServicos();
        removerServico();
        exibirMenu();
        break;
     case "10":
        listarAgendamento();
        removerAgendamento();
        exibirMenu();
        break;
     case '11':
        console.log('Até mais!');
        break;
     default:
        console.log('Opção inválida, tente novamente');
        exibirMenu();
        break;
    }
}
