const express = require('express');
const { NODE_ENV } = require('../config');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Services = require('./mindful-service.js');
const jsonParser=express.json();

app.use(morgan('dev'));
app.use(cors());

app.get('/journal-entries', (req, res, next) => {
  const knexInstance = req.app.get('db');
  Services.getAllEntries(knexInstance)
    .then(entries => {
      res.json(entries);
    })
    .catch(next);
});

app.post('/journal-entries', jsonParser, (req, res, next) =>{
  const {title, content, mood} = req.body;
  const newEntry = {title, content, mood};
  Services.addNewEntry(req.app.get('db'),
    newEntry
  )
    .then(entry => {
      res
        .status(201)
        .json(entry);
    })
    .catch(next);
});

module.exports = app;