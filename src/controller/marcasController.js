var connection = require ('../database/connection');

module.exports = {
    async index(req, res){
        const nome = req.params.nome;
        if(nome){
            const marcas = await connection('marca').where('nome', nome);
            if(marcas!=''){
                return res.json(marcas);
            } else {
                return res.status(204).send({msg: 'Não há registros'})
            }   
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
            return res.status(200).send({msg: 'Registro incluído com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha no cadastramento'});
        }
    },
    async update(req, res){
        const {nome, descricao} = req.body;
        const id = req.params.id;
        try{
            await connection('marca').where('id', id).update({
                nome,
                descricao
            })
            return res.status(200).send({msg: 'Registro alterado com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha na alteração do registro'});
        }
    },
    async delete(req, res){
        const id = req.params.id;
        try{
            await connection('marca').where('id', id).del();
            return res.status(200).send({msg: 'Registro excluído com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha na remoção do registro'});
        }
    }
    
};