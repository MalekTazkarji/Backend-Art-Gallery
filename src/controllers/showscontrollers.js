// import shows from "../models/shows.js";

// class showscontrollers{

// getAll(req,res,next){
//     shows.find({},(error,response)=>{
//         if(error)return next (error);
//         res.status(200).send(response);
//     })
// }
// post(req,res,next){
//     // let body =req.body;
//     let show=new shows({showtitle:req.body.showtitle,
//         image:req.file.path,
//         showtime:req.body.showtime,
//         showdate:req.body.showdate,
//         showdesc:req.body.showdesc,
//         showlocation:req.body.showlocation,});
//     show.save((err,response)=>{
//         if(err)return next(err);
//         res.status(200).send(response);
//     });
// }
   
//  put(req,res,next){
//     let{id}=req.params;
//     let body=req.body;
//     shows.updateOne({_id:id},{showtitle:body.showtitle,
//     image:req.file.path,
//     showdate:body.showdate,
//     showtime:body.showtime,
//     showdesc:body.showdesc,
//     showlocation:body.showlocation
// },
//         (error,response)=>{
//             if(error)return next(error);
//             res.status(200).send(response);
//         })
// } 
// delete(req,res,next){
//     let{id}=req.params;
//     shows.deleteOne({_id:id},(error,response)=>{
//         if(error)return next (error);
//         res.status(200).send(response);
//     })
// } 


// }
// const Showscontrollers=new showscontrollers();
// export default Showscontrollers;