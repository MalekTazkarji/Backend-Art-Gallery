const workshop=require("../models/workshop");
class workshopcontrollers{

getAll(req,res,next){
    workshop.find({},(error,response)=>{
        if(error)return next (error);
        res.status(200).send(response);
    })
}
post(req,res,next){
    // let body =req.body;

    let workshops=new workshop({shoptitle:req.body.shoptitle,
        image:req.file.path,
        shopdate:req.body.shopdate,
        shoptime:req.body.shoptime,
        shopdesc:req.body.shopdesc,
        shoplocation:req.body.shoplocation,});
    workshops.save((err,response)=>{
        if(err)return next(err);
        res.status(200).send(response);
    });
}
   
 put(req,res,next){
    let{id}=req.params;
    let body=req.body;
    let image=req.file.path;
    workshop.updateOne({_id:id},{shoptitle:body.shoptitle,
    image:req.file.path,
shopdate:body.shopdate,
shoptime:body.shoptime,
shopdesc:body.shopdesc,
shoplocation:body.shoplocation
},
        (error,response)=>{
            if(error)return next(error);
            res.status(200).send(response);
        })
} 
delete(req,res,next){
    let{id}=req.params;
    workshop.deleteOne({_id:id},(error,response)=>{
        if(error)return next (error);
        res.status(200).send(response);
    })
} 


}
const workshopscontrollers=new workshopcontrollers();
module.exports=workshopscontrollers;