
exports.up = function(knex, Promise) {
  return knex.schema.table('studentInfoTable', (table) => {
    table.string('headshot');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('studentInfoTable', (table) => {
    table.dropColumn('headshot');
  });
};
