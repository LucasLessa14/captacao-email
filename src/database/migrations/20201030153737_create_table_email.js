
exports.up = async knex => knex.schema.createTable('email', table => {
    table.increments('id');
    table.text('email').unique().notNullable();
    table.text('username').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
});

exports.down = async knex => knex.schema.dropTable('email');
