var connection = require ('../database/connection');

module.exports = {
    async index(req, res){
        const id = req.params.id;
        if(id){
            const modelos = await connection('modelos').where('id', id);
            if(modelos!=''){
                return res.json(modelos);
            } else {
                return res.status(204).send({msg: 'Não há registros'})
            }   
        } else {
            const modelos = await connection('modelos').select('*'); 
            return res.json(modelos);        
        }
    },
    async create(req, res){
        const {id_marcas, nome, descricao, foto, fichatecnica, datacriacao} = req.body;
        try{
            await connection('modelos').insert({
                id_marcas,
                nome,
                descricao,
                foto,
                fichatecnica,
                datacriacao
            })
            return res.status(200).send({msg: 'Registro incluído com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha no cadastramento' + err});
        }
    },
    async update(req, res){
        const { id_marcas, nome, descricao, foto, fichatecnica } = req.body;
        const id = req.params.id;
        try{
            await connection('modelos').where('id', id).update({
                id_marcas,
                nome,
                descricao,
                foto,
                fichatecnica
            })
            return res.status(200).send({msg: 'Registro alterado com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha na alteração do registro'});
        }
    },
    async delete(req, res){
        const id = req.params.id;
        try{
            await connection('modelos').where('id', id).del();
            return res.status(200).send({msg: 'Registro excluído com sucesso!'});
        
        } catch(err){
            res.status(400).send({ error: 'Falha na remoção do registro'});
        }
    }
    
};