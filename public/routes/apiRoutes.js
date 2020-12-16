// file link and dependancies
const data = require('../../db/db.json');
const fs = require('fs');
const path = require('path');

// ROUTING

module.exports = (app) => {

    function writeToDb(notes) {
        newNote = JSON.stringify(notes)
        fs.writeFileSync("./db/db.json", newNote, function (err) {
            if (err) {
                return console.log("Error apiRoutes.14")
            }
        })
    }
    // GET REQUEST 
    app.get('/api/notes', (req, res) => {
        res.json(data)});

    // POST REQUEST 
    app.post('/api/notes', (req, res) => {
        console.log("Note #" + req.body + " Has been saved");
        const note = req.body;
        data.push(req.body);
        writeToDb(req.body);
        return res.json(req.body);
    })
}