/* eslint-disable eqeqeq */
const express = require('express');
const path = require('path');
const xss = require('xss');
const Services = require('./userService');
const bcrypt = require('bcrypt')
const jwtGenerator = require('../../utils/jwtGenerator');
const jsonParser = express.json();
const userRouter = express.Router();
const authorization = require('../../utils/authorization')

const serializeUser = user => ({
  id: user.id,
  username: xss(user.username),
  password: xss(user.password)
});

//user registration

userRouter
  .post('/register', async (req, res) => {
    try{
      const { username, password} = req.body;
      const newUser = {username, password};
      const users = await Services.checkForUser(req.app.get('db'), newUser.username)
      console.log(users)
          if (users) {
              return res.status(400).json({error: 'username not available'});
          } 
        
    const saltRound = 2
    const salt = await bcrypt.genSalt(saltRound)
    const bcryptPassword = await bcrypt.hash(password, salt)

    const addUser = await Services.insertUser(req.app.get('db'), newUser.username, bcryptPassword); 
    const token =  jwtGenerator(addUser[0].user_id)
         res.json({token})    
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  });

 
// User Login
userRouter
  .post('/login', jsonParser, async (req, res, next) => {
    const {username, password } = req.body;
    const loginUser = {username, password };
    for (const [key, value] of Object.entries(loginUser))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        });
   const searchUsers = await Services.getUserWithUserName(req.app.get('db'), loginUser.username)
      if (searchUsers === undefined) {
          return res.status(400).json({
            error: 'Incorrect username or password',
          });
        }
    
        return Services.comparePasswords(loginUser.password, searchUsers.password)
          .then(compareMatch => {
            if (!compareMatch) {
              return res.status(400).json({
                error: 'Incorrect username or password',
              })
            }
        
            const token =  jwtGenerator(searchUsers.user_id)
            res.json({token}) 
      })
      .catch(next);
  });

userRouter
.get('/isverified', authorization, async (req, res) => {
    try {
      console.log('made it here')
       return res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')

    }
})

  userRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    Services.getAllUsers(knexInstance)
      .then(users => {
        res.json(users.map(serializeUser));
      })
      .catch(next);
  });

module.exports = userRouter;