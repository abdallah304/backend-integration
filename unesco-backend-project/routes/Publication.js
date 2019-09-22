// this file contains publication end points
// operations implemented are
// get all publications
// get by id
// create
// update
// delete

const express = require('express');
const router = express('Router');

const PublicationModel = require('../models/Publication')

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

// update
// we replace the whole document here so
// make sure to send full object data.
router.put('/:id',(req, res)=>{
    const data = req.body;
    PublicationModel.replaceOne(
        {_id:req.params.id},
        data, 
        (err, doc)=>{
            if(!err) res.send(doc);
            else {
                res.status = 500;
                res.send('error');
            }
        });
});

// delete
router.delete('/:id', (req, res)=>{
    PublicationModel.deleteOne({_id:req.params.id}, (err)=>{
        if (!err)
            res.send('deleted successfully');
        else
            res.send('error');
        
    });
});

// not found
router.all((req, res)=>{
    res.status = 404;
    res.send('page not found');
});

    module.exports=router;