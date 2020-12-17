// file link and dependancies
const data = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const uniqid = require("uniqid")

// ROUTING

module.exports = (app) => {

    // GET REQUEST 
    app.get('/api/notes', (req, res) => {
        res.json(data)});

    // POST REQUEST 
    app.post('/api/notes', (req, res) => {
        console.log("Note has been saved");
        const note = req.body;
        data.push(note);
        console.log(data)
        fs.writeFileSync(path.join(__dirname, "../../db/db.json"),
            JSON.stringify(data)
        )
        
        return res.json(note);
    })
}