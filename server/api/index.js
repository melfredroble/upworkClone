const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middlewares/errorMiddleware")
const config = require("./config/connection");
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors")
const { sessionMiddleware, wrap, corsConfig } = require("./controllers/session")
const userRoute = require('./routes/userRoutes')
const profileRoutes = require('./routes/profileRoutes')
const app = express()
const cookieParser = require('cookie-parser');

app.use(cors({
	origin: ["http://localhost:3000"],
	methods: ["GET", "POST", "DELETE", "PUT"],
	credentials: true
}))

// DB CONNECTION
let conn = config.connection;

// Set up cookie parsing middleware
app.use(cookieParser());

// SET SESSION
app.use(sessionMiddleware);

// Persist Session
app.use((req, res, next) => {
  const user = req.session;
  if (user) {
    next();
  }
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/user', userRoute)
app.use('/create-profile', profileRoutes)
app.use(errorHandler)



// CHECK IF USER SESSION EXIST
app.get("/login", (req, res) => {
	if (req.session.user) {
	  res.json({ loggedIn: true, userRole: req.session.user });
	} else {
	  res.json({ loggedIn: false });
	}
});

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
}); 

