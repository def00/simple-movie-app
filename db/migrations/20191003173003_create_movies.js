
exports.up = function(knex) {
  return knex.schema.createTable('movies', function(t) {
    t.increments('id').unsigned().primary();
    t.string('title').notNull();
    t.integer('year', 2).unsigned();
    t.string('genre').nullable();
    t.string('country').nullable();
    t.text('plot').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('movies');
};
