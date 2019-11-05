const express = require('express');



const app=express();

const port =5000;


var bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

//List of Users
const allUsers=require('./routes/users');

app.use('/users',allUsers);

//List of categories
const cats=require('./routes/vehiclesAndFares');

app.use('/cat',cats);


const timeLine=require('./routes/timeLine')

app.use('/timeLine',timeLine);


const history=require('./routes/history')

app.use('/history',history);


const connection=require('./db/index');

//app.use(express.bodyParser());
  //app.use(app.router);

