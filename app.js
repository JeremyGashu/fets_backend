const express = require('express')
const cors = require('cors')
const { database } = require('./database')
// const morgan = require('morgan')

const companyRoute = require('./routes/company.route')
const userRoute = require('./routes/users.route')
const authRoute = require('./routes/auth.route')
const feedRoute = require('./routes/feeds.route')

require('dotenv').config()
const app = express()

database.authenticate().then(() => {
    console.log('Connected to database')

}).catch(err => {
    console.log('Error', err)
    process.exit(1)
})


app.use(cors())
// app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/company', companyRoute)
app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/feed', feedRoute)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

