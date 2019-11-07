const router= require('express').Router();

const connection=require('../db/index');

router.route('/').get(async(req,res)=>{
const q1="select * from history order by outTime DESC "
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        
        res.json(await rows);
    })})
router.route('/').post(async(req,res)=>{

    let  q=`insert into history set ?`;
    let a;
    try{
        //hpending
        //have to add intime while removing outtime
        a={userId:`${req.body.userId}`,
        vehicleId:`${req.body.vehicleId}`,
        vehicleType:req.body.vehicleType,
       // inTime:req.body.inTime
        
    };
    }
    catch(e){
        return e;
    }
    //userName:`${req.body.userName}`,
    console.log(a)
    connection.query(q,await a,async(err,rows,fields)=>{
        if(err)
        res.status(400).json("Error: "+err);
        res.json(await rows);
    })

})
    
    
module.exports=router;
    
module.exports=router;