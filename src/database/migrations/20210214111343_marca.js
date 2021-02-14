exports.up = function(knex) {
    return knex.schema.createTable("marca", function(table) {
        table.increments();
        table.string("nome").notNullable();
        table.string("descricao").notNullable();
        table.timestamp("datacriacao").notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("marca");
} 

