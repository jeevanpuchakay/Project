const router= require('express').Router();

const connection=require('./../db/index');

router.route('/').get((req,res)=>{
const q1="select * from users"
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        
        res.json(await rows);
    })})
router.route('/').post(async function (req,res){
    let q2,a;
    try{
        a= {userId:`${req.body.userName}`,password:`${req.body.password}`};
    console.log(req.body)
    q2=`insert into users set ?`;
    }
    catch(e){
        return e;
    }
    connection.query(q2,a,(err,result)=>{
        console.log(a);
        if(err)
        res.status(400).json("Error: "+err);
        res.json("Inserted")
    })
    connection.end();
 }
)
    
    
module.exports=router;