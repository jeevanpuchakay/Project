const express = require('express');

const mysql= require('mysql');

const app=express();



let connection =mysql.createConnection({
    host:'localhost',
    user:'demo',
    password:'linux',
    database:'backend',
    multipleStatements: true
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