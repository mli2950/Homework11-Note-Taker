// file link and dependancies
const data = require('../../../db/db.json');
const fs = require('fs');
const path = require('path');

// ROUTING

module.exports = (app) => {
    // GET REQUEST 
    function writeToDB(notes) {
        newNote = JSON.stringify(notes)
        console.log(notes)
        fs.writeFileSync("../../../db/db.json", notes, funciton(err) {
            if(err) {
                return console.log("Error JS15)")
            }
        })
    }
    app.get('api/note', (req, res) => res.json(data));

    // POST REQUEST 
    app.post('/api/notes', (req, res) => {
        if (data.length == 0) {
            req.body.id = "0";
        } else {
            req.body.id = JSON.stringify(json.parse(data[data.length -1].id) +1)
        }
        console.log("Note #" + req.body.id + " Has been saved");
        data.push(req.body)
        writeToDB(data);
        res.json(req.body);
    })
}