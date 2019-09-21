const mongoose= require('mongoose');


const UserSchema= new mongoose.Schema(
{

name_ar:{type: String},
name_en :{type: String, required:true},
functionality_en:{type: String, required:true},
functionality_ar:{type: String},
photos_ids:[{type: mongoose.Schema.Types.ObjectId,ref :'PhotoAlbum'}],
subdepartments_ids:[Number],

})

const DepartmentModel = mongoose.model('Department', UserSchema);


module.exports = DepartmentModel ;
