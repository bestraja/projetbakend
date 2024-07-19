const express=require("express")  
const express=require("express")  
const app=express()
require("dotenv").config()
const port=process.env.PORT
const connectdb=require("./config/connectDB")
const RoutesUser=require('./Routes/RoutesUser')
const RoutesProduct=require('./Routes/RoutesProduct')
const person = require('./models/person')
const exec=require('child_process')
connectdb()

app.use(express.json())
app.use("/uploads",express.static(__dirname+"/uploads"))

//Routes
app.use('/api/user',RoutesUser)
app.use('/api/product',RoutesProduct)

app.use(function(req, res, ){
    res.status(404).send('not found!')})
