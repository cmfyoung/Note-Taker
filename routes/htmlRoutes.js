const express = require('express');
const router = express.Router();
const path = require ("path");


//Sends "index.html" to the client when a GET request is made 
router.get ("/notes", (req, res) =>
res.sendFile(path.join(__dirname, '/public/notes.html')));

//Sends "notes.html" to the client when a GET request is made 
router.get ("/", (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));

module.exports = router; 