const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const {db} = require('../config');
mongoose.connect(db, {useMongoClient: true});

// Connection messages
mongoose.connection.on('error', err => console.log('Error connecting to database'));
mongoose.connection.on('open', res => console.log('Connected to the database'));
