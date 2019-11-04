const router= require('express').Router();

const connection=require('../db/index');


router.route('/').get((req,res)=>{

    const q1="select * from vehicleCategory";
    connection.query(q1,(err,rows,fields)=>{
        if(err)
        res.json("Error: "+err);
        res.json(rows);
    })

})

router.route('/').post((req,res)=>{
    
    let q1="insert into vehicleCategory set ?"; 
    

    console.log(a);
       connection.query(q1,a,(err,result)=>{
        if(err)
        res.status(400).json("Error: "+err);
        res.json("Done1")
        console.log('done')
    })
})


module.exports=router;

/*
v
    let q1="insert into vehicleCategory (numberOfWheels,fare) values ?"; 
    let a=[[req.wheels,req.fare]]*/

    /*
    
    let q1="insert into vehicleCategory set ?"; 
    let a={numberOfWheels:req.sanitize('wheels').escape().trim(),
    fare:req.sanitize('fare').escape().trim()}*/