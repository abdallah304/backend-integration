// this file contains publication end points
// operations implemented are
// get all publications
// get by id
// create
// update 
// delete
// when fail i send object with error attribute
// ex: {error:' error message'}
// and proper status code

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
            res.status(500);
            res.send({'error':'cant get elements'});
        }
    })
})

// get specific by id
router.get('/:id',(req, res, next)=>{
    PublicationModel.find({_id: req.params.id}).
    populate('user_id').
    exec((err,Publication)=>{
        if(!err){
            res.send(Publication);
        }else if (err.name == 'CastError'){
            res.status(404);
            next();
        }else{
            res.status(500);
            res.send({'error':'find element error'});
        }
    })
})

// create
router.post('/',(req,res)=>{
    const data = req.body;
    const Publication = new PublicationModel(data);
    Publication.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else {
            res.status(400); 
            res.send({'error':'check required values'});
        }

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
                res.status(500);
                res.send({'error':'update fail'});
            }
        });
});

// delete
router.delete('/:id', (req, res)=>{
    PublicationModel.deleteOne({_id:req.params.id}, (err)=>{
        if (!err)
            res.send('deleted successfully');
        else{
            res.status(500);
            res.send({'error':'error in delete'});
        }
        
    });
});

// not found
router.all('**',(req, res)=>{
    res.status(404);
    res.send({'error':'page not found'});
});

// not json format
router.use((err, req, res, next)=>{
    if (err){
        res.status(400);
        res.send({'error':'Check request format'});
    }
});

    module.exports=router;