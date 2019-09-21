const express = require('express');
const router = express('Router');
const mongoose= require('mongoose');


const NewsModel = require('../models/News')

router.use(express.json());

//Get All news from DB
router.get('/',function(req,res,next)
{
    NewsModel.find({},(err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            res.send(err);
        }
    });
    
});
//
// news detail
router.get('/:id',(req,res,)=>{
    NewsModel.find({_id:req.params.id},(err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            res.send(err);
        }
    });
});
//
// specific news / news detail
router.get('/department/:id',(req,res,)=>{
    NewsModel.find({department_id:req.params.id},(err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            res.send(err);
        }
    });
});
// get all specific to department
router.get('/department/:id',(req,res,)=>{
    NewsModel.find({department_id:req.params.id},(err, docs)=>{
        if(!err){
            res.send(docs);
        }else{
            res.send(err);
        }
    });
});


//
router.post('/',(req,res)=>{
    const data = req.body;
    const News = new NewsModel(data);
    News.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
});


   

    module.exports=router;