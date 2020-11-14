require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
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
app.use(cors());
// app.use(validateBearerToken);

app.use(express.json());

app.use('/api/activity', actRouter);
app.use('/api/users', userRouter);
app.use('/api/journal', journalRouter);

// app.use(errorHandler);

module.exports = app;
