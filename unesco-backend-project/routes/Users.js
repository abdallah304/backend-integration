const express = require('express');
const router = express('Router');
const mongoose= require('mongoose');


const UsersModel = require('../models/Users')

router.use(express.json());
// login
router.post('/login', (req, res) => {
    UsersModel.findOne({ email: req.body.email }, function (err, user) {
      if (err) {
        res.send('Error in saving');
      }
      if (Boolean(user)) {
        if (user.email == req.body.email &&
          user.password == req.body.password) {
          res.send('login successfully!');
        }
        else {
          res.send('Unauthorized!');
        }
      }
      else {
        res.send('Undefined!');
      }
    });
  })
//
// signup
router.post('/signup', (req, res) => {
    const data = req.body;
    const Users = new UsersModel(data);
  
    var promise = new Promise((resolve, reject) => {
      UsersModel.findOne({ email: data.email }, function (err, user) {
        if (err) {
          reject(new Error('Server Error'))
        }
        if (Boolean(user)) {
          reject(res.send('E-mail already in use'))
        }
        else {
          Users.save((err, doc) => {
  
            if (!err) res.send('ok in saving')
            else res.send('error in saving')
          })
        }
        resolve(true)
      });
    })
  
  })
//
router.post('/',(req,res)=>{
    const data = req.body;
    const Users = new UsersModel(data);
    Users.save((err,doc)=>{

        if(!err)res.send('ok in saving')
        else res.send('erroe in saving')
    })
})



    module.exports=router;