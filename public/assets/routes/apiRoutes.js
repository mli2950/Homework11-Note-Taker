// file link and dependancies
const data = require('../../../db/db.json');
const fs = require('fs');
const path = require('path');

// ROUTING

module.exports = (app) => {
    // GET REQUEST 
    app.get('/api/notes', (req, res) => res.json(data));

    // POST REQUEST 
    app.post('/api/notes', (req, res) => {
        console.log("Note #" + req.body.id + " Has been saved");
        const note = req.body;
        data.push(note);
        fs.writeFileSync(
            path.join(__dirname, "../../db/db.json"),
            JSON.stringify([notes, null , 2]))
        res.json(note);
    })
}