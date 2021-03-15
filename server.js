/* eslint-disable semi */
// const express = require('express');
const app = require('./app')
const knex = require('knex');
const cors = require('cors')
const { DATABASE_URL } = require('./config')
const PORT = process.env.PORT
app.use(cors())

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
app.set('db', db)



app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})


