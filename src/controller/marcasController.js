var connection = require ('../database/connection');

module.exports = {
    async index(req, res){
        const nome = req.params.nome;
        if(nome){
            
            const marcas = await connection('marca').where('nome', nome);
            return res.json(marcas);    

        } else {
            
            const marcas = await connection('marca').select('*');
            return res.json(marcas);
        }
        
    },

    async create(req, res){
        const {nome, descricao, datacriacao} = req.body;
        try{
            await connection('marca').insert({
                nome,
                descricao,
                datacriacao
            })
            return res.status(200).send({sucesso: 'Registro incluído com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha no cadastramento'});
        }
    }
    
};