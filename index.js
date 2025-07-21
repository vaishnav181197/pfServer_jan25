require('dotenv').config()//configuring dotnev package to
//server for loading env variables to process.env
const express=require('express')//importing express
const cors=require('cors')
const router=require('./Routes/routes')
require('./Connect/dbConnect')

const server=express()//creating a server app

server.use(cors())//cors() returns cors middleware and use configures it
server.use(express.json())//configuring json middleware to
//convert json data format to native

server.use(router)

server.use('/projectimg',express.static("./uploads"))

const PORT=3000||process.env.PORT//setting default port number
//and alternate port number form env

server.listen(PORT,()=>{  //for making server run and wait for requests
    console.log("Server running at:",PORT)
})


// server.get('/demo/:uid',(req,res)=>{ //get request handler
//     console.log(req.params.uid)
//     res.send("GET Request HIT!")
// })

// server.post('/postreq',(req,res)=>{
//     console.log(req.query)
//     console.log(req.body)
//     // res.send("POST Request HIT")
//     res.json({"msg":"OK"}).status(205)
// })

// server.put('/putreq',(req,res)=>{
//     res.send("PUT Request HIT")
// })

// server.delete('/deletereq',(req,res)=>{
//     res.send("Delere Request Hit")
// })