const router= require('express').Router();

const connection=require('../db/index');

router.route('/').get(async(req,res)=>{
const q1="select * from timeLine"
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        
        res.json(await rows);
    })})
router.route('/').post(async(req,res)=>{

    let  q=`insert into timeLine set ?`;
    let a;
    console.log(req.body)
    try{
        a={userId:`${req.body.userId}`,vehicleId:`${req.body.vehicleId}`,
        userName:`${req.body.userName}`,vehicleType:req.body.vehicleType
    };
    }
    catch(e){
        return e;
    }
    connection.query(q,a,async(err,rows,fields)=>{
        if(err)
        res.status(400).json("Error: "+err);
        res.json(await rows);
    })

})
    
    
module.exports=router;

/*

let  a={
        userId:req.body.userId,
        vehicleId:req.body.vehicleId,
        vehicleType:req.body.vehicleType,
        inTime:Date.now(),
        userName:req.body.userName
    }
    console.log(a);
    connection.query(q,a,(err,resul)=>{
        if(err)
        res.status(400).json(err);
        res.json(Inserted);
    })


    */