const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const {db} = require('../config');
mongoose.connect(db, {useMongoClient: true});

// Connection messages
mongoose.connection
  .once('open', res => console.log('Connected to the database'))
  .on('error', err => console.log('Error connecting to database'));

