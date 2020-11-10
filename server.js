/* eslint-disable semi */
const express = require('express');
const morgan = require('morgan');

const app = express();
const entries = require('./client/src/Journal/JournalStore.js')
app.use(morgan('dev'));

app.get('/entries', (req, res) => {
  res
    .json(entries)
})
app.use((req, res) => {
  res.send('Hello, world!')
});


const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

