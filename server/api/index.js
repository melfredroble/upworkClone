const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middlewares/errorMiddleware")
const config = require("./config/connection");

const app = express()

// DB CONNECTION
let conn = config.connection;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/user', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
}); 