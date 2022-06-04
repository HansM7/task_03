import 'dotenv/config'

import express from "express"

import {Conteiner} from "./main.js"

const app = express()

// We define that the data is type JSON 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Define the port of execution
const port = process.env.PORT || 5000

// Instantiate the class
const data=new Conteiner()

app.get('/productos' , (req , res)=>{

    data.getMany().then((result)=>{
        res.json(result)
    })
    .catch((error)=>{
        console.log(error)
    })
    
})

app.get('/productoRandom' , async(req , res)=>{

    data.getRandom().then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
 
 })


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))