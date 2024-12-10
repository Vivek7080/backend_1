const express=require('express');
const router=express.Router();

// const person=require('./model/person');
const person=require('./../models/person');

router.get('/',async(req,res)=>{
    try{

        const data=await person.find();
        console.log('Data fectched successfully');
        res.status(500).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(200).json({error:'Internal server error'})
    }
})

router.post('/',async(req,res)=>{
    try{
  
      const data=req.body;
      const newPerson=new person(data);
      const response=await newPerson.save();
      console.log('data save');
      res.status(200).json(response);
    } 
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal server error'})
    }
  })


  router.get('/person/:workType',async(req,res)=>{
    try{
          const workType=req.params.workType;   // extract the worktype from url parameter
          if(workType=='waiter' || workType=='manager' || workType=='chef')
          {
              const data=await  person.find({work:workType});
              console.log('Data fetched');
              res.status(200).json(data);
          }
          else
          {
            res.status(404).json({error:'Invalid work Type'})
          }
    }
    catch(err)
    {
       console.log(err);
       res.status(500).json({error:'Internal server error'})
    }
})

router.put('/:id',async(req,res)=>{
  try{
        const personUpdatedId=req.params.id; // extract id from url parameter
        const updatedPersonData=req.body;  // updated data of person after conversion
        const response=await person.findByIdAndUpdate(personUpdatedId,updatedPersonData,{
          new :true,   // return updated document
          runValidators:true  // run mongoose validation
        })
        if(!response)
        {
          return res.status(404).json({error:'Person not found'})
        }
        console.log('Data updated');
        res.status(200).json(response);
  }catch(err)
  {
    console.log(err);
    res.status(200).json({error:'Internal server error'})
  }
})

router.delete('/:id',async(req,res)=>{
  try{
      const id=req.params.id;
      const response=await person.findByIdAndDelete(id);
      if(!response)
      {
        return res.status(400).json({error:'Not deleted successfully'});
      }
      console.log("deleted successfully");
      res.status(200).json(response);
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})


module.exports=router;