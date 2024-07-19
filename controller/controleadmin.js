const user=require('../models/User')

exports.deleteuser=async(req,res)=>{
    try {

        const userdeleted= await user.deleteOne({_id:req.params.id})
        res.status(200).send(userdeleted)
    } catch (error) {
        console.log(error);
    }
}