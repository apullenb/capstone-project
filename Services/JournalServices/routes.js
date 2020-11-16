/* eslint-disable eqeqeq */
const express = require('express');
const Services = require('./journal-service.js');
const jsonParser=express.json();
const authorization = require('../../utils/authorization')


const journalRouter = express.Router();
//Journal Routes
journalRouter
.get('/', authorization, async (req, res) => { 
  try {
      const user = await Services.getAllJournalEntries(req.app.get('db'), req.user)
     
     res.json(user)
     console.log(user)

  } catch (err) {
      console.error(err.message);
      res.status(500).json('server error');
      
  }
})
journalRouter
  .post('/journal-entries', jsonParser, (req, res, next) =>{
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