/* eslint no-console: 0 */
const express = require('express')
const cors = require('cors')
const fs = require('fs')

const buffer = fs.readFileSync('./data.json')
const allQuotes = JSON.parse(buffer)
const app = express()
app.use(cors())
const likedQuotes = allQuotes.quotes.map(quote => ({
    ...quote,
    likes: `${Math.floor(Math.random() * 1000)}`
}))

app.get('/quotes', (req, res) => {
    setTimeout(() => res.json(allQuotes), Math.floor(Math.random() * 5000))
})

app.get('/quotes/:id', (req, res) => {
    const quote = likedQuotes.find(item => item.id === req.params.id)
    if (quote) {
        console.log(quote.text)
        setTimeout(() => res.json(quote), Math.floor(Math.random() * 5000))
    } else {
        console.log(404, req.params.id)
        res.status(404).json({ error: 'quote not found' })
    }
})

const port = 3001
console.log(`Starting server on port ${port}`)
console.log(`Generating new random ratings`)
app.listen(port)
