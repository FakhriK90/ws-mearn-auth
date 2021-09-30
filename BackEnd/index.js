const express = require('express')
const app = express()
const port = 6000
const connectdb = require('./config/connectdb')
require('dotenv').config()
connectdb()

app.use(express.json())


app.use('/user', require('./Routes/userRoutes'))
app.listen(port, (error) => error ?console.log(error):console.log(`Server listening on port ${port}!`))