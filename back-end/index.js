const express = require('express');
const routes = require('./routes/tokimon');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Connected to port ${port}.`);
});

app.use('/tokimons', routes);