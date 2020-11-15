/* eslint-disable eqeqeq */
const express = require('express');
const { NODE_ENV } = require('../../config');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Services = require('./journal-service.js');
const jsonParser=express.json();

app.use(morgan('dev'));
app.use(cors());

const journalRouter = express.Router();
//Journal Routes
journalRouter
  .get('/', (req, res, next) => {
    const knexInstance = req.app.get('db');
    Services.getAllJournalEntries(knexInstance)
      .then(entries => {
        res.json(entries);
      })
      .catch(next);
  });

app.post('/journal-entries', jsonParser, (req, res, next) =>{
  const {title, content, mood} = req.body;
  const newEntry = {title, content, mood};
  Services.addNewJournalEntry(req.app.get('db'),
    newEntry
  )
    .then(entry => {
      res
        .status(201)
        .json(entry);
    })
    .catch(next);
});






module.exports = journalRouter;