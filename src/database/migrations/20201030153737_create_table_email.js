
exports.up = async knex => knex.schema.createTable('email', table => {
    table.increments('id');
    table.text('email').notNullable();
    table.text('name').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
});

exports.down = async knex => knex.schema.dropTable('email');
