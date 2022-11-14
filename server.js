// bring in environment variables from a .env file
require("dotenv").config()

// import express and morgan
const express = require("express")
const morgan = require("morgan")


// create the router object
const router = express.Router()
// register it with the application for routes with a certain prefix
app.use("/prefex", router)

// define a PORT variable from the environment with a default value
const PORT = process.env.PORT || 4000

// create an application object
const app = express()

/////////////////////////////////////
// ALL YOUR MIDDLEWARE AND ROUTES GO HERE
app.use(morgan("tiny")) // middleware for logging
app.use(express.urlencoded({extended: true})) //middleware for parsing urlencoded data
app.use(express.json()) // middleware for parsing incoming json
app.use("/static", express.static("static")) // to set a folder for static file serving
/////////////////////////////////////

// writing pass an anonymous function
app.get("/", (req, res) =>  {
    res.send("The Response")
  })
  
  // using a named function
  function routeHandler(req, res){
    res.send("the response")
  }
  app.get("/endpoint", routeHandler)


const middlewareFunction = (req, res, next) => {
    console.log("This is middleware")
   }

// using the middleware on all requests
app.use(middlewareFunction)
// using the middleware on certain urls
app.use("/endpoint", middlewareFunction)
// Server Listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))