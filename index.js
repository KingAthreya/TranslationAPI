//Import packages
import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"

// importing internal modules
import translateRoute from "./routes/translate.js"

// Declaring Functions

dotenv.config()
const app = express()

// creating middleware routes
app.use(bodyParser.json())
app.use("/api", translateRoute)



//Starting the server
app.listen(process.env.PORT || 3000, ()=>{
    console.log("Wohhoooo I am alive.")
})
