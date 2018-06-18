module.exports = {
  development: {
    client: 'pg',
    connection: "postgress:///mem2"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
