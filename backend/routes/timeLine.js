const router= require('express').Router();





router.route('/').get(async(req,res)=>{
   
    req.getConnection((err,connection)=>{
        
const q1="select * from timeLine"
connection.query(q1,async(err,rows,fields)=>{
    console.log('Done')
    
    res.json(await rows);
})
    })

})


 
router.route('/:id').get(async(req,res)=>{
   await req.getConnection(async(err,connection)=>{
    let a=req.params.id;
    const q=`select * from timeLine where vehicleId="${a}"`;
   // console.log(a)
    try{
        connection.query(q,a,async(err,rows)=>{
            console.log('Done')
            if(err)
            res.status(400).json(err);
//let q=rows
           // q=await rows.userId;
           //console.log(rows);
           let user={};
           user.userId=rows[0].userId;
           user.userName=rows[0].userName;
           user.vehicleId=rows[0].vehicleId;
           user.vehicleType=rows[0].vehicleType;
           user.inTime=rows[0].inTime;
            //console.log(user);
            res.send(user);
        })
        
    }
    catch(e){
        return e;
    }
   })
})    


router.route('/').post(async function(req,res){

    req.getConnection(async(err,connection)=>{
        let  q=`insert into timeLine set ?`;
    let a;
    try{
        a={userId:`${await req.body.userId}`,vehicleId:`${await req.body.vehicleId}`,
        userName:`${ await req.body.userName}`,vehicleType:await req.body.vehicleType
    };
    }
    catch(e){
        return e;
    }
    console.log(a);
    connection.query(q,a,(err,rows,fields)=>{
        if(err)
        res.status(400).json("Error: "+err);
        
            res.json(rows);
    })
    })
    
})
    
    


 
router.route('/:id').get(async(req,res)=>{
    await req.getConnection(async(err,connection)=>{
     let a=req.params.id;
     const q=`select * from timeLine where vehicleId="${a}"`;
    // console.log(a)
     try{
         connection.query(q,a,async(err,rows)=>{
             console.log('Done')
             if(err)
             res.status(400).json(err);
 //let q=rows
            // q=await rows.userId;
            //console.log(rows);
            let user={};
            user.userId=rows[0].userId;
            user.userName=rows[0].userName;
            user.vehicleId=rows[0].vehicleId;
            user.vehicleType=rows[0].vehicleType;
            user.inTime=rows[0].inTime;
             //console.log(user);
             res.send(user);
         })
         
     }
     catch(e){
         return e;
     }
    })
 })    
 
 
 router.route('/:id').delete(async(req,res)=>{
 
     await req.getConnection(async(err,connection)=>{
         let  q;
     try{
         q=`delete from timeLine where userId="${req.params.id}"`
     }
     catch(e){
         return e;
     }
     //console.log(q);
     connection.query(q,(err,rows,fields)=>{
         if(err)
         res.status(400).json("Error: "+err);
         
             res.json(rows);
     })
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