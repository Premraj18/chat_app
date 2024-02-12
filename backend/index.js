const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')

const authRoutes = require('../backend/routes/auth_routes')
const messageRoutes = require('./routes/message_routes')
const userRoutes = require('./routes/users_routes')
const {connectdb} = require('../backend/db/connectdb')

const app = express();
connectdb();

//Middleware
app.use(express.json());
app.use(cookieParser())

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req,res) => {
    res.send("Hello World")
})

//Listening Server
app.listen(process.env.PORT, () => {
    console.log('http://localhost:'+ process.env.PORT);
})