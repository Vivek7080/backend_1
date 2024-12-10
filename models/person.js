const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    } ,
    age: {
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }

})
const person=mongoose.model('person',personSchema);
module.exports=person;

