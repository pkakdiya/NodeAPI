const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./error.handler');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api/v1', require('./app.controller'));

/**Use Gloabal Error Handler */
app.use(errorHandler)

const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


