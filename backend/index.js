const express = require('express');



const app=express();

const port =8080;

const mysql= require('mysql');


const router=require('express').Router();

router.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const myConnection = require('express-myconnection'), // express-myconnection module
  dbOptions = {
      host:'localhost',
    user:'demo',
    password:'linux',
    database:'backend',
    multipleStatements: true
    };

app.use(myConnection(mysql, dbOptions, 'single'));

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

//List of Users
const allUsers=require('./routes/users');

app.use('/users',allUsers);

//List of categories


const timeLine=require('./routes/timeLine')

app.use('/timeLine',timeLine);


const history=require('./routes/history')

app.use('/history',history);

const dashboard=require('./routes/DashBoard')

app.use('/DashBoard',dashboard);


const connection=require('./db/index');

//app.use(express.bodyParser());
  //app.use(app.router);

