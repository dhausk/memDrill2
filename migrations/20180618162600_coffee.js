
exports.up = function (knex, Promise) {
  return knex.schema.createTable('coffee', function (table) {
    table.increments('id');
    table.text('name');
    table.text('roaster');
    table.integer('aroma');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('coffee');
};
