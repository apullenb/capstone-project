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

module.exports = foodRouter;