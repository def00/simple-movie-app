
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, name: 'John', email: 'john@example.org', comment: 'Very good', movie_id: 1},
        {id: 2, name: 'Anna', email: 'anna@example.org', comment: 'Didnt like it', movie_id: 1},
        {id: 3, name: 'Anna', email: 'anna@example.org', comment: 'Nice', movie_id: 2},
        {id: 4, name: 'John', email: 'john@example.org', comment: 'Didnt like it', movie_id: 3}
      ]);
    });
};
