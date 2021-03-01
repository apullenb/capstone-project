const express = require('express');
const path =require('path')
const Services = require('./foodservices');
const xss = require('xss');
const authorization = require('../../utils/authorization');



const jsonParser = express.json();
const foodRouter = express.Router();

foodRouter
.get('/', authorization, async (req, res) => { 

  try {
      const user = await Services.getById(req.app.get('db'), req.user)
     res.json(user)
  } catch (err) {
      console.error(err.message);
      res.status(500).json('server error');
  }
})

foodRouter
  .post('/', jsonParser, authorization, (req, res) => {
    const {breakfast, lunch, dinner, snack} = req.body;
    const newEntry = {breakfast, lunch, dinner, snack};
    newEntry.user_id = req.user  
    Services.addNewFoodEntry(
      req.app.get('db'),
      newEntry
    )
      .then(entry => {
        res
          .status(201).json()
      })
    })

foodRouter
.patch("/:id", jsonParser, authorization, (req, res, next) => {
    const { id } = req.params;
    const field = req.body
    Services.updateFood(req.app.get('db'), id, field)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(next);
});

module.exports = foodRouter;