const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
// init app
const app = express();

const {port, engine} = require('./config'); //Es6 Destructuring
const db = require('./models/db');

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/public', express.static('public'));
app.set('view engine', engine);

const controller = require('./libs/controller')(app);

app.listen(port, err => console.info(err ? `Error on port ${port}` : `App running on port ${port}`));
