const express = require('express');
const apiRoute = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

apiRoute.get('/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading notes file');
        }
        res.json(JSON.parse(data));
    });
})


apiRoute.post('/notes', (req, res) => {
    const newNote = {...req.body, id: uuidv4() }
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading notes file');
        }
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);
        // Add a new note
        parsedNotes.push(newNote);

        // Write updated notes back to the file
        fs.writeFile(
            'db/db.json',
            JSON.stringify(parsedNotes),
            (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
        );

        res.json(newNote);
    })
});


module.exports = apiRoute; 
