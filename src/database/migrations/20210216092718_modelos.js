
exports.up = function(knex) {
    return knex.schema.createTable("modelos", function(table) {
        table.increments();
        table.integer('id_marcas').notNullable();
        table.string("nome", 50).notNullable();
        table.string("descricao", 100).notNullable();
        table.string("foto", 50);
        table.string("fichatecnica");
        table.datetime("datacriacao").notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("modelos");
} 
