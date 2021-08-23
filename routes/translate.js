//Importing Packages
import express from "express"
import axios from "axios"
import dotenv from "dotenv"
dotenv.config()
const translateRoute = express.Router()

// Creating Post Route for Api
translateRoute.post("/translate", (req,res)=>{
    
    // Defining parameters
    let options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
          'api-version': '3.0',
          to: req.query.to || req.body.to,
          textType: req.query.textType || 'plain',
        },
        headers: {
          'content-type': req.query.content-type || 'application/json',
          'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
          'x-rapidapi-key': process.env.API_KEY
        },
        data: [{Text: req.body.text}]
      };
      
    //Making Request to orginal miscrosoft ApI
    axios.request(options).then(function (response) {
        res.send(response.data[0])
    }).catch(function (error) {
        res.send(error)
    });
})

//Exporting as default
export default translateRoute