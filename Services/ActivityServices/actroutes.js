/* eslint-disable semi */
/* eslint-disable eqeqeq */
const express = require('express');
const path =require('path')
const Services = require('./activityservice');
const xss = require('xss');


const jsonParser=express.json();
const actRouter = express.Router();

const serializeActEntry = entry => ({
  id: entry.id,
  medicine: xss(entry.medicine),
  hours_slept: xss(entry.hours_slept),
  food: xss(entry.food),
  sugar_intake: xss(entry.sugar_intake),
  rate_focus: xss(entry.rate_focus),
  rate_happiness: xss(entry.rate_happiness),
  rate_energy: xss(entry.rate_energy),
  user_id: entry.user_id,
  date: entry.date
});

actRouter
  .route('/')
  .get((req, res, next) => {
    Services.getAllLogEntries(req.app.get('db')) 
      .then(entries => {
        res.json(entries.map(serializeActEntry))
      })
      .catch(next)
  })
  
actRouter
  .route('/')
  .post(jsonParser, (req, res, next) => {
    const {medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy} = req.body;
    const newEntry = {medicine, hours_slept, food, sugar_intake, rate_focus, rate_happiness, rate_energy};
    
    for (const [key, value] of Object.entries(newEntry))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
     
    newEntry.user_id = req.user.id  

    Services.addNewActEntry(
      req.app.get('db'),
      newEntry
    )
      .then(entry => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${entry.id}`))
          .json(entry)
      })
      .catch(next)
  })

actRouter
  .route('/:user_id')
  .all((req, res, next) => {
    Services.getById(
      req.app.get('db'),
      req.params.user_id
    )
      .then(entry => {
        if (!entry) {
          return res.status(404).json({
            error: { message: 'Does not exist' }
          })
        }
        res.entry = entry
        next()
      })
      .catch(next)
  })
    
  

module.exports = actRouter;