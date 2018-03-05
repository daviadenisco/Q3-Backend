exports.up = function(knex, Promise) {
  return knex.schema.createTable("studentInfoTable", (table) => {
    // id
    table.increments();
    // full name
    table.string("fullName");
    // github
    table.string("gitHub");
    // linkedin
    table.string("linkedIn");
    // email address
    table.string('email').notNull();
    // personal/professional website
    table.string('professionalSite');
    // linke to deployed capstone project
    table.string('capstoneLink');
    // blurb describing the capstone project
    table.string('capstoneDesc');
    // timestamps
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("studentInfoTable");
};
// add image url column
