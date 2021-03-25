/* eslint-disable semi */
/* eslint-disable eqeqeq */
const express = require('express');
const path =require('path')
const Services = require('./activityservice');
const xss = require('xss');
const authorization = require('../../utils/authorization');



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
.get('/', authorization, async (req, res) => { 

  try {
      const user = await Services.getById(req.app.get('db'), req.user)
     
     res.json(user)
  } catch (err) {
      console.error(err.message);
      res.status(500).json('server error');
      
  }
})
  
actRouter
  .post('/', jsonParser, authorization, (req, res) => {
    const {medicine, hours_slept, sugar_intake, rate_focus, rate_happiness, rate_energy} = req.body;
    const newEntry = {medicine, hours_slept, sugar_intake, rate_focus, rate_happiness, rate_energy};
    
    for (const [key, value] of Object.entries(newEntry))
      if (value === null || undefined || '')
        return res.status(400).json({
          error: `Missing Value for '${key}' `
        })
     
    newEntry.user_id = req.user  
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