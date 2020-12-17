// Dependancy
const path = require('path')

// Routing
module.exports = (app) => {
    // Route for /notes
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../notes.html'))
    })
    // Route for homepage
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'))
    })


}