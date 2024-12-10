const express=require('express');
const app=express();
const db=require('./db');
const person=require('./models/person');
const personRoute=require('./Router/personRoute');

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Hello server has initated");
})    

app.use('/person',personRoute);

app.listen('3000',()=>{
    console.log("Server created successully");
})