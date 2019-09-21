const mongoose= require('mongoose');


const UserSchema= new mongoose.Schema(
{
photo:{

    img:String,
    titel_en:String,
    titel_ar:String,
    desc_en:String,
    desc_ar: String
},
department_id:{type: mongoose.Schema.Types.ObjectId,ref :'Department'}
})

const PhotoAlbumModel = mongoose.model('PhotoAlbum', UserSchema);


module.exports = PhotoAlbumModel ;
