require("dotenv").config();
const express =require('express');
const app =express();
 const users=require('./models/userModel');
 const cors=require('cors');
require('./connect/conn')
const router=require('./routes/routes')

app.listen(3001,()=>{
    console.log(`server is started on http://localhost:${3001}`)
})

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/',(req,res)=>{
    res.send("Hello World from sanket Patel")
})