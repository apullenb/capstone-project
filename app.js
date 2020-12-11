require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { NODE_ENV } = require('./config');
// const validateBearerToken = require('./validate-bearer-token');
// const errorHandler = require('./error-handler');
const userRouter = require('./Services/Users/userRoutes');
const actRouter = require('./Services/ActivityServices/actroutes');
const journalRouter = require('./Services/JournalServices/routes');
const app = express();


const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());




// app.use(validateBearerToken);

app.use(express.json());

app.use(cors());

app.use('/dashboard', require('./Services/routes/dashboard'));
app.use('/api/activity', actRouter);
app.use('/api/users', userRouter);
app.use('/api/journal', journalRouter);

app.use((error, req, res, next) => {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'server error' }};
  } else {
    response = { error };
  }
  res.status(500).json(response);
});


module.exports = app;
