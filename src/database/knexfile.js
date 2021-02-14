// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:'localhost',
      database: 'app_motos',
      user:     'usr_pg',
      password: 'usr_pg',
      migrations: {
        directory: './data/migrations',
      },
      seeds: { directory: './data/seeds' },
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}