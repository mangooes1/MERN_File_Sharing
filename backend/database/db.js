 import mongoose from 'mongoose';


const DBconnection = async ( ) =>{
    const MONODB_URI = "mongodb+srv://Aasthasuman990:Aasthasuman990@cluster0.xq8epqo.mongodb.net/?retryWrites=true&w=majority";
    
    try{
          await mongoose.connect(MONODB_URI, {useNewUrlParser : true});
         console.log('Database Connected Successfully');
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
 }

 export default  DBconnection;

 