/* eslint-disable eqeqeq */
const express = require('express');
const Services = require('./journal-service.js');
const jsonParser=express.json();
const authorization = require('../../utils/authorization')
const jwt = require('jsonwebtoken');


const journalRouter = express.Router();
//Journal Routes
journalRouter
.get('/', authorization, async (req, res) => { 
  try {
      const user = await Services.getAllJournalEntries(req.app.get('db'), req.user)
     
     res.json(user)

  } catch (err) {
      console.error(err.message);
      res.status(500).json('server error');
      
  }
})
journalRouter
  .post('/', jsonParser, authorization, (req, res) =>{
    const {title, content, mood} = req.body;
    const newEntry = {title, content, mood};

    for (const [key, value] of Object.entries(newEntry))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
     console.log(req.user)
     newEntry.user_id = req.user

    Services.addNewJournalEntry(req.app.get('db'),
      newEntry
    )
      .then(entry => {
        res
          .status(201)
          .json(entry);
      })
    })






module.exports = journalRouter;