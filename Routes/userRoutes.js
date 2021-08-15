//package
const express =require("express")
const router =express.Router();
//controller
const {Register, Edit} = require("../Controllers/user.controllers")

//middlware
const isAuth = require('../Middlewmare/isAuth')
//vaidator
const {validation,registerValidate}
 = require ("../Middlewmare/validation/Validator")

//multer package
const multer = require("multer");
const { Router } = require("express");
//multer config
const storage = multer.diskStorage({
    destination:(req,File, callback) => {
        callback(null,"./public")//file where we will storage img
    },
    filename:(req,file, callback) => {
        callback(null,file.originalname); // image name when we uploaded
    }
})

const upload = multer({storage: storage}).single('profilePhoto');


 /*
@method: POST
@ path:http:localhost:5000/api/user/signup
@ parameter: req.body  
//@desc     Register user
//@access   Public
*/
router.post('/signup',upload,registerValidate(),validation, Register)
 /*
@method: Put
@ path:http:localhost:5000/api/user/edit
@ parameter: req.body  
//@desc     edit user
//@access   Private
*/
router.put('/edit/:id',isAuth,Edit)

module.exports=router
