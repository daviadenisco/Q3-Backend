
module.exports = {
  development: {
    client: "pg",
    connection: 'postgres://localhost:5432/student_info'
  },
  production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
}
