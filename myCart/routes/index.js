var express = require('express');
var router = express.Router();
var csrf = require ('csurf');
var csrfProtection = csrf();
const https = require('https');
var Product = require('../models/product');
var User = require ('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

/ Signup /Register */
  router.post('/signup', function (req, res, next)
  {  
    const userData = {    
     email: req.body.email,
     password: req.body.password,
    }
    console.log(req.body.email);
    console.log(req.body.password);
    User.findOne({
      email: req.body.email,
    })
      .then(user => {
        console.log(userData)
        if (!user) {
          bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            userData.password = hash
            //console.log("2222222222222");
            User.create(userData)
            .then(user => {
              res.json({ status: user.email + '   Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
          })
        } 
        else {
            res.json({ error: 'User already exists' })
        }
      })
        .catch(err => {
          //console.log("1111111111111111111")
          res.send('error: ' + err)
        })
  });

/*  Login. */
  router.post('/login', function (req, res, next){
      const userData = {    
        email: req.body.email,
        password: req.body.password,    
      }
        console.log(req.body.email);
        console.log(req.body.password);
        User.findOne({
          email: req.body.email,
        })
          .then(user => {
            console.log(userData)           
            if (!user) {
              var err = "No User found with this email";
              res.send ( 'error:' + err);
              console.log(" No user found with this email");
            }
            else{
              bcrypt.compare(req.body.password, user.password, function(err, match) {
                if (err) {
                  console.log("incorrect password");
                  res.send('error: Incorrect Password' + err);
                }
                else {    
                  res.json({status: user.email + "  Logged In"});
                }  
                    
              });
            }
                
          })
            .catch(err => {
              console.log("1111111111111111111")
              res.send('error:' + err)
            })            
  });    
  
  // to get all the products

  router.get('/', (req, res) => 
  {
      Product.find(function(err, docs){
        var productChunks = [];
        for (var i = 0 ; i < docs.length ; i++){
          productChunks.push(docs[i]);
        }         
        res.json(productChunks);
      });
  });
  router.get('/edit', function(req,res,){
      console.log("wor");
      res.json({msg:"no data inside"});
  });

  // to get a particular product using id

  router.get('/product-details/:id' , function (req, res, next){
      var productId = req.params.id;
      var product = [];
      console.log (productId);
      Product.findById(productId, function(err, product){
        for (var i = 0 ; i < product.length ; i++){
          product.push(product[i]);
        }
        console.log(product);
        res.json(product);
      })    
  });
  
  router.use(function(req, res, next) 
  {
    let obj = {success: false};
    if (req.method === "POST") {
      obj.msg = "POST method not found";
    } 
    else {
      obj.msg = "Invalid URL";
    }
    res.status(404).json(obj);
  });

  router.use(function(req, res, next) 
  {
    let obj = {success: false};
    if (req.method === "GET") {
      obj.msg = "GET method not found";
    } 
    else {
      obj.msg = "Invalid URL";
    }
    res.status(404).json(obj);
  });   
module.exports = router;