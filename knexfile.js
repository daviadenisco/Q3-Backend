
module.exports = {
  development: {
    client: "pg",
    connection: 'postgres://localhost:5432/studentInfo'
  },
  production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
}
