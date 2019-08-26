
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('name', 128).unique().notNullable();
      tbl.decimal('avgWeightOz').notNullable();
      tbl.boolean('delicious');
  })
  //.createTable(); for more tables just chain em up
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
