const router= require('express').Router();


//Note change timeline table to history

router.route('/Yesterday').get(async(req,res)=>{

  await req.getConnection(async(err,connection)=>{
    const q1="select count(distinct vehicleId) as count from timeLine where DATEDIFF(date(timeLine.inTime),date(current_date))=-1";
try{
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        res.json(await rows);
    })
}   
catch(e){
    return e;
}
})
})


//Note change timeline table to history

router.route('/ThisMonth').get(async(req,res)=>{

    await req.getConnection((err,connection)=>{
        const q1="select count(distinct vehicleId) as count from timeLine where DATEDIFF(date(timeLine.inTime),date(current_date))>=-30";
try{
    connection.query(q1,async(err,rows,fields)=>{
        console.log('Done')
        res.json(await rows);
    })
}   
catch(e){
    return e;
}
    })

})

    
    
module.exports=router;