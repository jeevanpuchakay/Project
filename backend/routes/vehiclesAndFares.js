const router= require('express').Router();

let connection=require('../db/index');


router.route('/').get(async(req,res)=>{

    const q1="select * from vehicleCategory";
    connection.query(q1,async(err,rows,fields)=>{
        if(err)
        res.status(010).json("Error: "+err);
        res.json(await rows);
    })

})

router.route('/').post(async(req,res)=>{
    
    let q1="insert into vehicleCategory set ?";
    let a;
   try{
    console.log(await req.body);
  a={numberOfWheels:await req.body.wheels,fare:await req.body.fare}
   }
   catch(e){
       return e;
   }

       connection.query(q1,a,(err,result)=>{
        if(err)
        res.status(400).json("Error: "+err);
        res.json("Done1")
        console.log('done')
    })
})


module.exports=router;
