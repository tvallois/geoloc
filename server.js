const express = require('express');
const config = require('./config.json');
const path = require('path');
const index = require('./routes/index');
const connect = require('./routes/connect');
const oauth = require('./routes/oauth');
const bodyParser = require('body-parser');

// Express connection and set views
const app = express();
app.set('views', path.join(__dirname, 'views', 'html'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.listen(config.hostnamePort, config.hostname, () => {
  console.log('Starting the serveur called %s on port %s', config.hostname, config.hostnamePort);
});
app.use(express.static('public'));
app.use('/index', index);
app.use('/connect', connect);
app.use('/oauth', oauth);


module.exports = app;
