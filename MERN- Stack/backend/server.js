const express = require('express')
require('dotenv').config()
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workout', workoutRoutes)

mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log('connected to db && listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env