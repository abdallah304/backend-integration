const express = require('express');
const router = express('Router');
const mongoose= require('mongoose');


const DepartmentModel = require('../models/Department')

router.use(express.json());

//
router.get('/',(req,res,next)=>{
    DepartmentModel.find({},(err, docs)=>{
     if(!err)res.send(docs)
     else res.status(400).json({
         message:"couldnt retrive data"
     })
    })
})
//
router.post('/',(req,res)=>{
    const data = req.body;
    const Department = new DepartmentModel(data);
    Department.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
})




   

    module.exports=router;