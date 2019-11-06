const router= require('express').Router();

const connection=require('./../db/index');

router.route('/').get(async(req,res)=>{
    await req.getConnection(async(err,connection)=>{
        const q1="select * from block"
    connection.query(q1,(err,rows,fields)=>{
        console.log('Done')
        
        res.json(rows);
    })
    })
})
    
    
    
    
module.exports=router;