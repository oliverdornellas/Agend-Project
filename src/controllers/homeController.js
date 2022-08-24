//importando model
//const HomeModel = require('../models/HomeModel');

/*HomeModel.create({
    titulo: 'Um título de teste',
    descricao: 'Uma descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e=>console.log(e));*/



const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index',{ contatos });
};

