const path = require('path')
const data = require('')


module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../notes.html'))
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../index.html'))
    })


}