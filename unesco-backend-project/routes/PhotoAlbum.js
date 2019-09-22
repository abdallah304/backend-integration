const express = require('express');
const router = express('Router');

const PhotoAlbum = require('../models/PhotoAlbum');
const PhotoAlbumModel = require('../models/PhotoAlbum')

router.use(express.json());

// get all images
router.get('/',(req,res)=>{
    
    PhotoAlbum.find((err,docs)=>{
        if(!err)res.send(docs)
        else res.send('error')
    })
});
// get by department
// delete image
router.delete('/:id', (req, res)=>{
    PhotoAlbumModel.deleteOne({_id:req.params.id}, (err)=>{
        if (!err)
            res.send('deleted successfully');
        else
            res.send(err);
        
    });
});

// create
router.post('/',(req,res)=>{
    const data = req.body;
    const PhotoAlbum = new PhotoAlbumModel(data);
    PhotoAlbum.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
})

// notfound
router.all('**',(req, res)=>{
    res.status(404);
    res.send('page not found');
});

    module.exports=router;