const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');
const db = require ('./db/db.json')

const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static('public'));

// GET Route for the db.json file
app.get('/db', (req, res) =>
    res.json(db)
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
