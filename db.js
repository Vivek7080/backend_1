const mongoose=require('mongoose');

// define mongoUrl
const mongoUrl=  'mongodb://127.0.0.1:27017/hotels';

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;


db.on('connected', () => {
    console.log('Mongoose connected to DB');
  });
  
  db.on('error', (err) => {
    console.log('Mongoose connection error:', err);
  });
  
  db.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
module.exports=db;