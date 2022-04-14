const express = require('express')
const cors = require('cors')
const { database } = require('./database')
const example = require('./models').Example
require('dotenv').config()
const app = express()




database.authenticate().then(() => {
    console.log('Connected to database')
}).catch(err => {
    console.log('Error', err)
    process.exit(1)
})



example.findAll().then(val => {
    console.log(val)
}).catch(err => {
    console.log(err)
})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res) => {
    res.json({ msg: 'Sender' })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})