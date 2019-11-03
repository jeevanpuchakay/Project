const express = require('express');

const mysql= require('mysql');

const app=express();

const port =4000;


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})

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

connection.query("select * from hello",(err,rows,fields)=>{
    console.log('Done')
    rows.map((q)=>{
        console.log(q.b+" "+q.a);
    })
    //res.json(rows);
})