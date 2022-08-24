// Conexao com a base de dados, busca e validação de dados
const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, require: true}, 
    descricao: String
});
                            //nome do model
const HomeModel = mongoose.model('Home', HomeSchema);

class Home {
    
}

module.exports = HomeModel;
