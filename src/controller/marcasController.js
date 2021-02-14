var connection = require ('../database/connection');

module.exports = {
    async index(req, res){
        const marcas = await connection('marca').select('*');
        return res.json(marcas);
    },

    async create(req, res){
        const {nome, descricao, datacriacao} = req.body;
        
        await connection('marca').insert({
            nome,
            descricao,
            datacriacao
        })
        return res.status(200).send('Registro incluído com sucesso!')
    }
    
};