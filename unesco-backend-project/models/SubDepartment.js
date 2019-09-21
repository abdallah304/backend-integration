const mongoose= require('mongoose');


const UserSchema= new mongoose.Schema(
{

sub_dept_name_ar:{type: String},
sub_dept_name_eg:{type: String, required:true},
department_id:{type: mongoose.Schema.Types.ObjectId,ref :'Department'},
sub_subdepartments : [{id:Number, sub_subdepartment_name_ar: String,
     sub_subdepartment_name_en:String }]
})

const SubDepartmentModel = mongoose.model('SubDepartment', UserSchema);


module.exports = SubDepartmentModel ;
