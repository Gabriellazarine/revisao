const data = require('../data');

function listarServicos() {
    const {servicos} = data;
    if(servicos.length === 0) {
        console.log('Nenhuem serviço encontrado');
    } else {
        servicos.forEach((servico, index) => {
            console.log(`\nServiço ${index + 1}`);
            console.log(`Tipo do Serviço: ${servico.nomeDoServico}`);
            console.log(`Preço: ${servico.preco}`);
        })
    }
}
module.exports = { listarServicos };