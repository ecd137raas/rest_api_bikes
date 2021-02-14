
exports.up = function(knex) {
    return knex.schema.createTable("modelos", function(table) {
        table.increments();
        table.string("nome").notNullable();
        table.string("descricao").notNullable();
        table.string("fichatecnica");
        table.timestamp("datacriacao").notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("modelos");
} 
