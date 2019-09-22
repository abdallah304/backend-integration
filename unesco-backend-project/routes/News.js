const express = require('express');
const router = express('Router');


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

// news detail
router.get('/:id',(req,res,next)=>{
    NewsModel.find({_id:req.params.id},(err, docs)=>{
        if(!err){
            res.send(docs);
        }else if (err.name == 'CastError'){
            //res.status(404);
            //res.send(err);
            next();
        }else {
            res.status(404);
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
// get all specific to subdepartment

// update / modify
// update
// we replace the whole document here so
// make sure to send full object data.
router.put('/:id',(req, res)=>{
    const data = req.body;
    NewsModel.replaceOne(
        {_id:req.params.id},
        data, 
        (err, doc)=>{
            if(!err) res.send(doc);
            else {
                res.status(405);
                res.send(err);
            }
        });
});

// delete
router.delete('/:id', (req, res)=>{
    NewsModel.deleteOne({_id:req.params.id}, (err)=>{
        if (!err)
            res.send('deleted successfully');
        else
            res.send(err);
        
    });
});

// create news
router.post('/',(req,res)=>{
    const data = req.body;
    const News = new NewsModel(data);
    News.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send(err)
    })
});

// not found
router.all('**',(req, res)=>{
    res.status(404);
    res.send('page not found');
});

    module.exports=router;