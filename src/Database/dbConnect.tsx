import mongoose from 'mongoose';

const URL : string = process.env.MONGODB_URL || 'mongodb://localhost:27017/nextapi';

const dbConnect = (handler : any)=>async(req:any,res:any)=>{
    if (mongoose.connections[0].readyState) {
        console.log("Already connected")
        return handler(req, res);
      }
    await mongoose.connect(URL).then(()=>{
        console.log('Connection Established !!');
        return handler(req,res);
    }).catch( error =>{
        console.error(`Unable to Connect to database : ${error.message}`)
    })

}

export default dbConnect;