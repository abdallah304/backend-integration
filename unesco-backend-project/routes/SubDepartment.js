const express = require('express');
const router = express('Router');
const mongoose= require('mongoose');


const SubDepartmentModel = require('../models/SubDepartment')

router.use(express.json());


router.post('/',(req,res)=>{
    const data = req.body;
    const SubDepartment = new SubDepartmentModel(data);
    SubDepartment.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
})





    module.exports=router;