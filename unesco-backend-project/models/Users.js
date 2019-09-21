const mongoose= require('mongoose');


const UserSchema= new mongoose.Schema(
{
first_name:String,
last_name:String,
email: String,
password : String,
phone:Number, 
address:{
    country:String,city:String,street:String
},
role:String,
permissions:[String],
department_id:{type: mongoose.Schema.Types.ObjectId,ref :'Department'}

})

const UsersModel = mongoose.model('Users', UserSchema);


module.exports = UsersModel ;
