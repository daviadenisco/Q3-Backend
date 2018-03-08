
exports.up = function(knex, Promise) {
  return knex.schema.renameTable('studentInfoTable', 'student_info_table')
};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable('student_info_table', 'studentInfoTable')
};
