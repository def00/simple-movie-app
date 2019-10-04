const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  development: {
    client: 'mysql',
    connection: process.env.CONNECTION_STRING,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      directory: `${ __dirname }/db/seeds`
    }
  },
  test: {
    client: 'sqlite',
    connection: {
      filename: "./test-db.sqlite"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/db/migrations`
    },
    seeds: {
      directory: `${ __dirname }/db/seeds`
    }
  },
  production: {
    client: 'mysql',
    connection: process.env.CONNECTION_STRING,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${ __dirname }/db/migrations`
    }
  }
}
