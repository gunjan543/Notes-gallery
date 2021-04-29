const express = require('express')
const router = express.Router();
const Note = require('../models/notes.model');
const User = require('../models/auth.model');
var MongoClient = require("mongodb").MongoClient;
var Binary = require("mongodb").Binary;
// Load Controllers
const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    uploadNotesController
} = require('../controllers/auth.controller')


const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

router.post('/register',
    validSign,
    registerController)

router.post('/login',
    validLogin, signinController)

router.post('/activation', activationController)

// router.post('/getNotes', (req, res)=>{

//    console.log(req.body);
//     Note.find({userId:req.body.id}, function(err, notes){

//         if(!err){
//             console.log("success");
//             console.log(notes);
//             res.send(notes);
//         }
//         else{
//             console.log(err);
//         }
//     })
// })

// forgot reset password
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);

module.exports = router