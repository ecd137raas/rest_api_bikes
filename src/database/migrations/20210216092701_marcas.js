exports.up = function(knex) {
    return knex.schema.createTable("marcas", function(table) {
        table.increments();
        table.string("nome", 50).notNullable();
        table.string("descricao", 100).notNullable();
        table.datetime("datacriacao").notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("marcas");
} 
