
exports.up = function(knex) {
  return knex.schema.createTable('comments', function(t) {
    t.increments('id').unsigned().primary();
    t.string('name', 255);
    t.text('comment');
    t.string('email', 255);
    t.integer('movie_id').unsigned();
    t.index('movie_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
