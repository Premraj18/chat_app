const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')

const authRoutes = require('../backend/routes/auth_routes')
const messageRoutes = require('./routes/message_routes')
const userRoutes = require('./routes/users_routes')
const {connectdb} = require('../backend/db/connectdb')
const cors = require('cors')
const { app, server } = require('./socket/socket')

connectdb();
app.use(cors())

//Middleware
app.use(express.json());
app.use(cookieParser())

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req,res) => {
    res.send("Hello World")
})

//Listening Server
server.listen(process.env.PORT, () => {
    console.log('http://localhost:'+ process.env.PORT);
})