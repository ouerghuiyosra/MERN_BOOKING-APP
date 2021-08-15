//package
const express =require("express")
const router =express.Router();
//controller
const {Login} = require("../Controllers/auth.controllers")
//middlware
const isAuth = require('../Middlewmare/isAuth')
//vaidator
const {validation,loginValidate}
 = require ("../Middlewmare/validation/Validator")

/*
@method: POST
@ path:http:localhost:5000/api/auth/login
@ parameter: req.body  
//@desc     login user
//@access   Public
*/

router.post('/login',loginValidate(), validation, Login);
/*
@method: GET
@ path:http:localhost:5000/api/auth/current
@ parameter: req.headers  
//@desc     current user
//@access   Public
*/


router.get('/current',isAuth,(req,res)=>{
    res.send({msg:"authorized",user:req.user})
})

module.exports=router