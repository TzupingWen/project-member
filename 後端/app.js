const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const productsRoute = require('./routes/products')
const membersRoute = require('./routes/members')
const coursesRoute = require('./routes/courses')
const cors = require("cors")
const port = 3001

app.listen(port, console.log(`Listening on port ${port}`))


app.use(cors());
//Database connection
mongoose.connect('mongodb://localhost/project',{useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection;

db.once('open', ()=>{
 console.log("connect to mongodb!!")
})

//use parser
app.use(express.json())

//test
app.get('/',(req,res)=>{res.send('Hello world')})

//ProductRoute
app.use('/products',productsRoute)
app.use('/members',membersRoute)
app.use('/courses', coursesRoute)
