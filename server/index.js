const express = require('express')
const app = express()
const db = require('../database_reviews/database.js')
const port = 3001

app.use(express.static('public'))
app.get('/api/reviews', (req, res) => {
    var allReview = function (data) {
        res.send(data)
    }
    db.getAllReview(allReview)
})

app.listen(port, () => console.log(`server app listening on port ${port}!`))