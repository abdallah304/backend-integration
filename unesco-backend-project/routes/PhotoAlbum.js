const express = require('express');
const router = express('Router');
const mongoose= require('mongoose');
const PhotoAlbum = require('../models/PhotoAlbum');

const PhotoAlbumModel = require('../models/PhotoAlbum')

router.use(express.json());

router.get('/',(req,res)=>{
    
    PhotoAlbum.find((err,docs)=>{
        if(!err)res.send(docs)
        else res.send('error')
    })
});
//
router.post('/',(req,res)=>{
    const data = req.body;
    const PhotoAlbum = new PhotoAlbumModel(data);
    PhotoAlbum.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
})




   

    module.exports=router;