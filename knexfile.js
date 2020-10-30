module.exports = {

    development: {
      client: 'pg',
      connection: {
        database: 'captacao',
        user: 'teste',
        password: 'teste'
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: `${__dirname}/src/database/migrations`
      },
      seeds: {
        directory: `${__dirname}/src/database/migrations`
      }
    },
};
  