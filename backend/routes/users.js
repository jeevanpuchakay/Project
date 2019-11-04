const router= require('express').Router();

const connection=require('./../db/index');

router.route('/').get((req,res)=>{
const q1="select * from users"
    connection.query(q1,(err,rows,fields)=>{
        console.log('Done')
        
        res.json(rows);
    })})
router.route('/').post((req,res)=>{
    const q2=`insert into users value (${req.userName},${req.password})`;
    connection.query(q2,(err,result)=>{
        if(err)
        res.json("Error: "+err);
    })})
    
    
module.exports=router;