const express = require('express');

const mysql= require('mysql');

const app=express();



const connection =mysql.createConnection({
    host:'localhost',
    user:'demo',
    password:'linux',
    database:'backend'
})

connection.connect((err)=>{
    if(err)
    {
        console.log('Error '+err);
    }
    else{
        console.log('Mysql connected');
    }
})

module.exports=connection;