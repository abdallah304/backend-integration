const mongoose= require('mongoose');


const UserSchema= new mongoose.Schema(
{
    titel_en:{type: String, required:true},
    titel_ar:String,
    images :[String],
    date:Date,
    file:String,
    short_desc_en:String,
    short_desc_ar:String,
    long_desc_en:String,
    long_desc_ar:String,
    department_id: {type: mongoose.Schema.Types.ObjectId,ref :'Department'},
    subdepartment_ids : [Number],
    
    genre:String,
    user_id:{type: mongoose.Schema.Types.ObjectId,ref :'Users'}
    

})

const NewsModel = mongoose.model('News', UserSchema);


module.exports = NewsModel ;
