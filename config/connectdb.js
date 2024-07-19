const mongoose=require("mongoose")

const connectDatabase=async()=>{
    try {
        await mongoose.connect(process.env.URI)
        console.log("db connect");
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDatabase