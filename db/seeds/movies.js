
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {id: 1, title: 'Fight club', year: 1999, genre: 'Sci Fi', country: 'USA', plot: 'Test fc'},
        {id: 2, title: 'Star Wars', year: 1976, genre: 'Sci Fi', country: 'USA', plot: 'Test sw'},
        {id: 3, title: 'Star Trek', year: 1965, genre: 'Sci Fi', country: 'USA', plot: 'Test st'}
      ]);
    });
};
