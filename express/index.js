const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
        res.send('Test')
})

app.get('/json', (req, res, next) => {
        const data = {
                greeting: 'Test!!!'
        }
        res.json(data)
})

app.listen(3000) //can also use 5k or 8k

