const express = require('express');
const router = express('Router');
const mongoose= require('mongoose');


const PublicationModel = require('../models/Publication')

//
router.use(express.json());
// get all
router.get('/',(req,res)=>{
    PublicationModel.find()
    .populate('user_id')
    .exec((err,Publication)=>{
        if(!err){
            res.send(Publication);
        }else{
            res.send('can not Read Books');
        }
    })
})
// get specific by id
router.get('/:id',(req,res)=>{
    PublicationModel.find({_id: req.params.id}).
    populate('user_id').
    exec((err,Publication)=>{
        if(!err){
            res.send(Publication);
        }else{
            res.send('can not Read Books');
        }
    })
})
// create
router.post('/',(req,res)=>{
    const data = req.body;
    const Publication = new PublicationModel(data);
    Publication.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
})




    module.exports=router;