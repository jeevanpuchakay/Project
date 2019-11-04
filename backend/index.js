const express = require('express');

const mysql= require('mysql');

const app=express();

const port =5000;


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

//List of Users
const allUsers=require('./routes/users');

app.use('/users',allUsers);

//List of categories
const cats=require('./routes/vehiclesAndFares');

app.use('/cat',cats);


const connection=require('./db/index');

